import puppeteer from 'puppeteer';
import type { IPdfGenerator } from './IPdfGenerator';

export class PuppeteerPdfGenerator implements IPdfGenerator {
  async generatePdf(filePath: string): Promise<Buffer> {
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
      const pdf = await page.pdf({ format: 'A4', printBackground: true });
      return Buffer.from(pdf);
    } finally {
      await browser.close();
    }
  }
}
