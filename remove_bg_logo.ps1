$code = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public class ImageProcessor {
    public static void RemoveWhiteBackground(string infile, string outfile) {
        Bitmap bmp = new Bitmap(infile);
        Rectangle rect = new Rectangle(0, 0, bmp.Width, bmp.Height);
        BitmapData bmpData = bmp.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
        
        int bytes = Math.Abs(bmpData.Stride) * bmp.Height;
        byte[] rgbValues = new byte[bytes];
        Marshal.Copy(bmpData.Scan0, rgbValues, 0, bytes);
        
        for (int counter = 0; counter < rgbValues.Length; counter += 4) {
            byte b = rgbValues[counter];
            byte g = rgbValues[counter + 1];
            byte r = rgbValues[counter + 2];
            byte a = rgbValues[counter + 3];
            
            // If pixel is very light (near white), make it transparent
            if (r > 240 && g > 240 && b > 240) {
                rgbValues[counter + 3] = 0; // Set Alpha to 0
            } else if (r > 220 && g > 220 && b > 220) {
                // Soft edge for anti-aliasing
                rgbValues[counter + 3] = 100;
            }
        }
        
        Marshal.Copy(rgbValues, 0, bmpData.Scan0, bytes);
        bmp.UnlockBits(bmpData);
        bmp.Save(outfile, ImageFormat.Png);
        bmp.Dispose();
    }
}
"@
Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
[ImageProcessor]::RemoveWhiteBackground("c:\Users\GANJI VINAY DATTU\OneDrive\Desktop\fortune education\logo.png", "c:\Users\GANJI VINAY DATTU\OneDrive\Desktop\fortune education\logo-transparent.png")
