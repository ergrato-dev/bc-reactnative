#!/usr/bin/env node
// Inserta/actualiza la navegación "← anterior | siguiente →" al final de cada documento.
// Orden: README.md raíz y luego, por semana: README, 1-teoria, 2-practicas, 3-proyecto,
// 4-recursos, 5-glosario, rubrica-evaluacion. Idempotente: reescribe el bloque entre marcadores.
// Uso: node scripts/docs-nav.mjs
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, posix, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const START = "<!-- nav:start -->";
const END = "<!-- nav:end -->";

const sorted = (dir) => (existsSync(dir) ? readdirSync(dir).sort() : []);

function weekDocs(week) {
  const w = join(ROOT, "bootcamp", week);
  const readmes = (sub) => sorted(join(w, sub)).map((d) => join(w, sub, d, "README.md"));
  return [
    join(w, "README.md"),
    ...sorted(join(w, "1-teoria")).filter((f) => f.endsWith(".md")).map((f) => join(w, "1-teoria", f)),
    ...readmes("2-practicas"),
    join(w, "3-proyecto", "README.md"),
    ...readmes("4-recursos"),
    join(w, "5-glosario", "README.md"),
    join(w, "rubrica-evaluacion.md"),
  ];
}

const docs = [
  join(ROOT, "README.md"),
  ...sorted(join(ROOT, "bootcamp")).filter((d) => d.startsWith("week-")).flatMap(weekDocs),
].filter(existsSync);

function title(file) {
  if (file === docs[0]) return "Inicio";
  const h1 = readFileSync(file, "utf8").match(/^# (.+)$/m);
  const text = h1 ? h1[1] : relative(ROOT, file);
  return text.replace(/`/g, "").replace(/[[\]]/g, "\\$&").trim();
}

const titles = docs.map(title);
const link = (from, i) =>
  `[${titles[i]}](${relative(dirname(from), docs[i]).split("\\").join(posix.sep)})`;

const navLine = (file, prevIdx, nextIdx) =>
  [prevIdx >= 0 && `← ${link(file, prevIdx)}`, nextIdx >= 0 && `${link(file, nextIdx)} →`]
    .filter(Boolean)
    .join(" | ");

// Sección "🔗 Navegación" de cada README de semana: salta semana a semana.
const weekReadmes = docs.filter((f) => /week-[^/\\]+[/\\]README\.md$/.test(relative(ROOT, f)));
const WEEK_SECTION = /(## 🔗 Navegación\n)[\s\S]*?(?=\n## |$)/;

docs.forEach((file, i) => {
  const src = readFileSync(file, "utf8");
  const re = new RegExp(`\\n*${START}[\\s\\S]*?${END}\\n*`);
  let body = src.replace(re, "\n").trimEnd();

  const w = weekReadmes.indexOf(file);
  if (w >= 0) {
    const at = (k) => (weekReadmes[k] ? docs.indexOf(weekReadmes[k]) : -1);
    body = body.replace(WEEK_SECTION, `$1\n${navLine(file, at(w - 1), at(w + 1))}\n`).trimEnd();
  }

  const hr = body.endsWith("\n---") ? "" : "---\n\n";
  const block = `${START}\n\n${hr}${navLine(file, i - 1, i + 1 < docs.length ? i + 1 : -1)}\n\n${END}`;
  writeFileSync(file, `${body}\n\n${block}\n`);
});

console.log(`Navegación actualizada en ${docs.length} documentos.`);
