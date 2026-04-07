export interface IPdfGenerator {
  generatePdf(filePath: string): Promise<Buffer>;
}
