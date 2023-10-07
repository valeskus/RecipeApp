import { FileValidator } from '@nestjs/common';
import sizeOf from 'image-size';

interface ValidationOptions {
  minWidth: number;
  minHeight: number;
  aspectRatio: number;
}

export class DimensionsValidator extends FileValidator<ValidationOptions> {
  private isValidHeight = (height?: number) => {
    return Number(height) >= this.validationOptions.minHeight;
  };

  private isValidWidth = (width?: number) => {
    return Number(width) >= this.validationOptions.minWidth;
  };

  private isValidRation = (height?: number, width?: number) => {
    return Number(width) / Number(height) === this.validationOptions.aspectRatio;
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
      return `Image aspect ration should be ${this.validationOptions.aspectRatio}`;
    }

    return '';
  }
}
