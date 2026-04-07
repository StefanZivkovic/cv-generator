import { IPdfGenerator } from "./IPdfGenerator";
import { PuppeteerPdfGenerator } from "./PuppeteerPdfGenerator";

export class HtmlToPdfGenerator implements IPdfGenerator {
  private generator: IPdfGenerator = new PuppeteerPdfGenerator();

  async generatePdf(filePath: string): Promise<Buffer> {
    return this.generator.generatePdf(filePath);
  }
}
