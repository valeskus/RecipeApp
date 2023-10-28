import { FileValidator } from '@nestjs/common';
import sizeOf from 'image-size';

interface ValidationOptions {
  minWidth: number;
  minHeight: number;
  allowedAspectRatios: Array<string>;
}

export class DimensionsValidator extends FileValidator<ValidationOptions> {
  private isValidHeight = (height?: number) => {
    return Number(height) >= this.validationOptions.minHeight;
  };

  private isValidWidth = (width?: number) => {
    return Number(width) >= this.validationOptions.minWidth;
  };

  private isValidRation = (width?: number, height?: number) => {
    return this.validationOptions.allowedAspectRatios
      .map((ratio) => {
        const [width, height] = ratio.split(':');

        return Number(width) / Number(height);
      })
      .includes(Number(width) / Number(height));
  };

  isValid(file?: Express.Multer.File): boolean {
    if (!file) {
      return false;
    }

    const result = sizeOf(file.buffer);

    return this.isValidHeight(result.height)
      && this.isValidWidth(result.width)
      && this.isValidRation(result.width, result.height);
  }

  buildErrorMessage(file: Express.Multer.File): string {
    const result = sizeOf(file.buffer);

    if (!this.isValidHeight(result.height)) {
      return `Image height should be at least ${this.validationOptions.minHeight}`;
    }

    if (!this.isValidWidth(result.width)) {
      return `Image width should be at least ${this.validationOptions.minWidth}`;
    }

    if (!this.isValidRation(result.width, result.height)) {
      return `Image aspect ration should be one of ${this.validationOptions.allowedAspectRatios}`;
    }

    return '';
  }
}
