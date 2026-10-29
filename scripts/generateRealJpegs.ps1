$csharpSource = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;

public class RomanticImageGenerator
{
    public static void GenerateImages(string outputDir)
    {
        if (!Directory.Exists(outputDir))
        {
            Directory.CreateDirectory(outputDir);
        }

        string[] quotes = new string[]
        {
            "O comeco da nossa caminhada juntos",
            "Cada sorriso ao seu lado ilumina meus dias",
            "Onde o tempo parece parar quando estamos juntos",
            "Nossos melhores abracos e conversas",
            "Construindo memorias inesqueciveis a cada dia",
            "A certeza de escolher voce todos os dias",
            "O carinho sincero que faz meu coracao transbordar",
            "Cada detalhe se torna especial contigo",
            "Para todo o sempre a minha melhor escolha"
        };

        int width = 1200;
        int height = 900;

        ImageCodecInfo jpgEncoder = null;
        foreach (ImageCodecInfo codec in ImageCodecInfo.GetImageEncoders())
        {
            if (codec.MimeType == "image/jpeg")
            {
                jpgEncoder = codec;
                break;
            }
        }

        EncoderParameters encoderParams = new EncoderParameters(1);
        encoderParams.Param[0] = new EncoderParameter(Encoder.Quality, 92L);

        for (int i = 1; i <= 9; i++)
        {
            string fileName = string.Format("{0:D2}.jpeg", i);
            string filePath = Path.Combine(outputDir, fileName);
            string quote = quotes[i - 1];

            using (Bitmap bmp = new Bitmap(width, height))
            {
                using (Graphics g = Graphics.FromImage(bmp))
                {
                    g.SmoothingMode = SmoothingMode.AntiAlias;
                    g.TextRenderingHint = System.Drawing.Text.TextRenderingHint.ClearTypeGridFit;

                    // Fundo Lavanda
                    using (LinearGradientBrush bgBrush = new LinearGradientBrush(
                        new Rectangle(0, 0, width, height),
                        Color.FromArgb(250, 247, 253),
                        Color.FromArgb(232, 219, 246),
                        45f))
                    {
                        g.FillRectangle(bgBrush, 0, 0, width, height);
                    }

                    // Moldura tracejada
                    using (Pen framePen = new Pen(Color.FromArgb(180, 190, 155, 226), 3f))
                    {
                        framePen.DashStyle = DashStyle.Dash;
                        g.DrawRectangle(framePen, 40, 40, width - 80, height - 80);
                    }

                    // Cartao branco central
                    Rectangle cardRect = new Rectangle(140, 100, width - 280, height - 200);
                    using (SolidBrush cardBrush = new SolidBrush(Color.White))
                    {
                        g.FillRectangle(cardBrush, cardRect);
                    }
                    using (Pen cardBorder = new Pen(Color.FromArgb(215, 192, 238), 2f))
                    {
                        g.DrawRectangle(cardBorder, cardRect);
                    }

                    // Circulo decorativo
                    using (SolidBrush circleBrush = new SolidBrush(Color.FromArgb(243, 236, 250)))
                    {
                        g.FillEllipse(circleBrush, (width / 2) - 80, 180, 160, 160);
                    }

                    // Coracao
                    using (GraphicsPath heartPath = new GraphicsPath())
                    {
                        float cx = width / 2f;
                        float cy = 250f;
                        heartPath.AddBezier(cx, cy + 50, cx - 55, cy + 10, cx - 60, cy - 40, cx - 30, cy - 45);
                        heartPath.AddBezier(cx - 30, cy - 45, cx, cy - 35, cx, cy - 15, cx, cy - 15);
                        heartPath.AddBezier(cx, cy - 15, cx, cy - 35, cx + 30, cy - 45, cx + 30, cy - 45);
                        heartPath.AddBezier(cx + 30, cy - 45, cx + 60, cy - 40, cx + 55, cy + 10, cx, cy + 50);
                        heartPath.CloseFigure();

                        using (SolidBrush heartBrush = new SolidBrush(Color.FromArgb(124, 58, 237)))
                        {
                            g.FillPath(heartBrush, heartPath);
                        }
                    }

                    // Textos
                    using (StringFormat sf = new StringFormat())
                    {
                        sf.Alignment = StringAlignment.Center;
                        sf.LineAlignment = StringAlignment.Center;

                        using (Font fontTitle = new Font("Georgia", 36f, FontStyle.Bold))
                        using (Font fontQuote = new Font("Georgia", 20f, FontStyle.Italic))
                        using (Font fontName = new Font("Georgia", 18f, FontStyle.Bold))
                        using (Font fontNote = new Font("Arial", 15f, FontStyle.Regular))
                        using (SolidBrush brushTitle = new SolidBrush(Color.FromArgb(78, 47, 107)))
                        using (SolidBrush brushQuote = new SolidBrush(Color.FromArgb(107, 50, 148)))
                        using (SolidBrush brushName = new SolidBrush(Color.FromArgb(163, 116, 211)))
                        using (SolidBrush brushNote = new SolidBrush(Color.FromArgb(137, 85, 190)))
                        {
                            g.DrawString("Momento " + string.Format("{0:D2}", i), fontTitle, brushTitle, width / 2f, 410f, sf);
                            g.DrawString("\"" + quote + "\"", fontQuote, brushQuote, width / 2f, 480f, sf);
                            g.DrawString("Giovanna & Voce", fontName, brushName, width / 2f, 540f, sf);
                            g.DrawString("Insira sua foto real em: public/carrossel/" + fileName, fontNote, brushNote, width / 2f, 630f, sf);
                        }
                    }

                    bmp.Save(filePath, jpgEncoder, encoderParams);
                    Console.WriteLine("Sucesso: " + filePath);
                }
            }
        }
    }
}
"@

Add-Type -TypeDefinition $csharpSource -ReferencedAssemblies "System.Drawing.dll"
$targetDir = (Resolve-Path "public\carrossel").Path
[RomanticImageGenerator]::GenerateImages($targetDir)
