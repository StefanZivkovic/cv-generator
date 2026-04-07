import fs from 'fs/promises';
import path from 'path';
import { HtmlToPdfGenerator } from './HtmlToPdfGenerator';
import { IPdfGenerator } from './IPdfGenerator';

async function main() {
  const filename = 'cv-qr-code-top';
  const htmlPath = path.resolve(__dirname, `../assets/${filename}.html`);
  const generator: IPdfGenerator = new HtmlToPdfGenerator();
  const pdf = await generator.generatePdf(htmlPath);
  const outputPath = path.join(__dirname, `../output/${filename}.pdf`);
  await fs.writeFile(outputPath, pdf);
  console.log(`PDF written to ${outputPath}`);
}

main().catch(console.error);
