'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import QRCode from 'qrcode';
import { 
  ArrowLeft, Download, Copy, RefreshCw, Upload, Link, Mail, Phone, MessageSquare, 
  Wifi, User, MapPin, Calendar, Instagram, Facebook, Twitter, Linkedin, Youtube, 
  Music, CreditCard, Bitcoin, Type, Crown, Palette, Image as ImageIcon, RotateCcw, Sparkles, 
  Eye, Square, Circle, Settings, Zap, Shield, Globe
} from 'lucide-react';

interface QRGeneratorProps {
  onBack: () => void;
}

type QRType = 'url' | 'text' | 'email' | 'phone' | 'sms' | 'wifi' | 'vcard' | 'location' | 'event';
type PatternShape = 'square' | 'circle' | 'rounded' | 'diamond';
type CornerStyle = 'square' | 'rounded' | 'extra-rounded' | 'circle';
type FrameStyle = 'none' | 'square' | 'rounded' | 'circle';
type DotStyle = 'square' | 'circle' | 'rounded' | 'diamond';
type EyeStyle = 'square' | 'circle' | 'rounded' | 'leaf';

interface QRConfig {
  // QR Type
  isDynamic: boolean;
  type: QRType;
  content: string;
  
  // QR Settings
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
  size: number;
  exportSize: number;
  
  // Colors
  foregroundColor: string;
  backgroundColor: string;
  borderColor: string;
  frameColor: string;
  gradientEnabled: boolean;
  gradientColor: string;
  
  // Style
  borderWidth: number;
  borderRadius: number;
  padding: number;
  dotPadding: number;
  
  // Pattern & Shape
  patternShape: PatternShape;
  dotStyle: DotStyle;
  eyeStyle: EyeStyle;
  cornerStyle: CornerStyle;
  frameStyle: FrameStyle;
  frameText: string;
  
  // Logo & Images
  logoFile: File | null;
  logoUrl: string;
  logoSize: number;
  logoOpacity: number;
  backgroundImageFile: File | null;
  backgroundImageUrl: string;
  backgroundImageOpacity: number;
}

const defaultConfig: QRConfig = {
  isDynamic: false,
  type: 'url',
  content: 'https://example.com',
  errorCorrectionLevel: 'M',
  size: 300,
  exportSize: 1000,
  foregroundColor: '#000000',
  backgroundColor: '#ffffff',
  borderColor: '#000000',
  frameColor: '#000000',
  gradientEnabled: false,
  gradientColor: '#6366f1',
  borderWidth: 0,
  borderRadius: 0,
  padding: 20,
  dotPadding: 0,
  patternShape: 'square',
  dotStyle: 'square',
  eyeStyle: 'square',
  cornerStyle: 'square',
  frameStyle: 'none',
  frameText: '',
  logoFile: null,
  logoUrl: '',
  logoSize: 20,
  logoOpacity: 100,
  backgroundImageFile: null,
  backgroundImageUrl: '',
  backgroundImageOpacity: 30
};

const qrTypes = [
  { value: 'url', label: 'Website URL', icon: Link, placeholder: 'https://example.com' },
  { value: 'text', label: 'Plain Text', icon: Type, placeholder: 'Enter your text' },
  { value: 'email', label: 'Email', icon: Mail, placeholder: 'email@example.com' },
  { value: 'phone', label: 'Phone', icon: Phone, placeholder: '+1234567890' },
  { value: 'sms', label: 'SMS', icon: MessageSquare, placeholder: '+1234567890' },
  { value: 'wifi', label: 'WiFi', icon: Wifi, placeholder: 'Network Name' },
  { value: 'vcard', label: 'Contact Card', icon: User, placeholder: 'Contact Info' },
  { value: 'location', label: 'Location', icon: MapPin, placeholder: 'Address or Coordinates' },
  { value: 'event', label: 'Event', icon: Calendar, placeholder: 'Event Details' }
];

const brandedTemplates = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    config: {
      foregroundColor: '#E4405F',
      backgroundColor: '#ffffff',
      borderRadius: 20,
      dotStyle: 'circle' as DotStyle,
      eyeStyle: 'rounded' as EyeStyle,
      dotPadding: 2,
      frameStyle: 'rounded' as FrameStyle,
      frameColor: '#E4405F',
      gradientEnabled: true,
      gradientColor: '#fd5949'
    }
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: Facebook,
    config: {
      foregroundColor: '#1877F2',
      backgroundColor: '#ffffff',
      borderRadius: 15,
      dotStyle: 'rounded' as DotStyle,
      eyeStyle: 'rounded' as EyeStyle,
      dotPadding: 1,
      frameStyle: 'square' as FrameStyle,
      frameColor: '#1877F2'
    }
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: Twitter,
    config: {
      foregroundColor: '#1DA1F2',
      backgroundColor: '#ffffff',
      borderRadius: 25,
      dotStyle: 'circle' as DotStyle,
      eyeStyle: 'circle' as EyeStyle,
      dotPadding: 3,
      frameStyle: 'circle' as FrameStyle,
      frameColor: '#1DA1F2'
    }
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: Linkedin,
    config: {
      foregroundColor: '#0A66C2',
      backgroundColor: '#ffffff',
      borderRadius: 10,
      dotStyle: 'square' as DotStyle,
      eyeStyle: 'rounded' as EyeStyle,
      dotPadding: 1,
      frameStyle: 'square' as FrameStyle,
      frameColor: '#0A66C2'
    }
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: Youtube,
    config: {
      foregroundColor: '#FF0000',
      backgroundColor: '#ffffff',
      borderRadius: 15,
      dotStyle: 'rounded' as DotStyle,
      eyeStyle: 'rounded' as EyeStyle,
      dotPadding: 2,
      frameStyle: 'rounded' as FrameStyle,
      frameColor: '#FF0000'
    }
  },
  {
    id: 'spotify',
    name: 'Spotify',
    icon: Music,
    config: {
      foregroundColor: '#1DB954',
      backgroundColor: '#191414',
      borderRadius: 20,
      dotStyle: 'circle' as DotStyle,
      eyeStyle: 'circle' as EyeStyle,
      dotPadding: 2,
      frameStyle: 'circle' as FrameStyle,
      frameColor: '#1DB954'
    }
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: Crown,
    config: {
      foregroundColor: '#FFD700',
      backgroundColor: '#000000',
      borderRadius: 15,
      dotStyle: 'circle' as DotStyle,
      eyeStyle: 'rounded' as EyeStyle,
      dotPadding: 3,
      frameStyle: 'rounded' as FrameStyle,
      frameColor: '#FFD700',
      gradientEnabled: true,
      gradientColor: '#FFA500'
    }
  },
  {
    id: 'modern',
    name: 'Modern',
    icon: Sparkles,
    config: {
      foregroundColor: '#6366F1',
      backgroundColor: '#ffffff',
      borderRadius: 25,
      dotStyle: 'circle' as DotStyle,
      eyeStyle: 'circle' as EyeStyle,
      dotPadding: 4,
      frameStyle: 'circle' as FrameStyle,
      frameColor: '#8B5CF6',
      gradientEnabled: true,
      gradientColor: '#8B5CF6'
    }
  }
];

export function QRGenerator({ onBack }: QRGeneratorProps) {
  const [config, setConfig] = useState<QRConfig>(defaultConfig);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [logoImage, setLogoImage] = useState<HTMLImageElement | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);
  const backgroundInputRef = useRef<HTMLInputElement>(null);

  const updateConfig = (updates: Partial<QRConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  const generateQRContent = () => {
    const { type, content } = config;
    
    switch (type) {
      case 'url':
        return content.startsWith('http') ? content : `https://${content}`;
      case 'email':
        return `mailto:${content}`;
      case 'phone':
        return `tel:${content}`;
      case 'sms':
        return `sms:${content}`;
      case 'wifi':
        return `WIFI:T:WPA;S:${content};P:password;H:false;;`;
      case 'vcard':
        return `BEGIN:VCARD\nVERSION:3.0\nFN:${content}\nEND:VCARD`;
      case 'location':
        return `geo:${content}`;
      case 'event':
        return content;
      default:
        return content;
    }
  };

  const fileToDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  const drawCustomQR = async (canvas: HTMLCanvasElement, qrData: string) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      // Generate QR code data
      const qrArray = await QRCode.create(qrData, {
        errorCorrectionLevel: config.errorCorrectionLevel
      });

      const modules = qrArray.modules;
      const size = modules.size;
      const cellSize = config.size / size;
      
      canvas.width = config.size + (config.padding * 2);
      canvas.height = config.size + (config.padding * 2);

      // Clear canvas
      ctx.fillStyle = config.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw background image if available
      if (backgroundImage) {
        ctx.save();
        ctx.globalAlpha = config.backgroundImageOpacity / 100;
        ctx.drawImage(backgroundImage, config.padding, config.padding, config.size, config.size);
        ctx.restore();
      }

      // Create gradient if enabled
      let fillStyle: string | CanvasGradient = config.foregroundColor;
      if (config.gradientEnabled) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, config.foregroundColor);
        gradient.addColorStop(1, config.gradientColor);
        fillStyle = gradient;
      }

      // Draw QR modules with custom styling
      ctx.fillStyle = fillStyle;
      
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if (modules.get(x, y)) {
            const cellX = config.padding + (x * cellSize) + config.dotPadding;
            const cellY = config.padding + (y * cellSize) + config.dotPadding;
            const dotSize = cellSize - (config.dotPadding * 2);
            
            // Check if this is an eye pattern (finder pattern)
            const isEye = (x < 9 && y < 9) || (x >= size - 8 && y < 9) || (x < 9 && y >= size - 8);
            
            if (isEye) {
              // Draw eye with custom style
              drawDot(ctx, cellX, cellY, dotSize, config.eyeStyle, fillStyle);
            } else {
              // Draw regular dot with custom style
              drawDot(ctx, cellX, cellY, dotSize, config.dotStyle, fillStyle);
            }
          }
        }
      }

      // Draw logo if available
      if (logoImage) {
        const logoSize = (config.size * config.logoSize) / 100;
        const logoX = config.padding + (config.size - logoSize) / 2;
        const logoY = config.padding + (config.size - logoSize) / 2;
        
        // Draw white background for logo
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(logoX - 5, logoY - 5, logoSize + 10, logoSize + 10);
        
        ctx.save();
        ctx.globalAlpha = config.logoOpacity / 100;
        ctx.drawImage(logoImage, logoX, logoY, logoSize, logoSize);
        ctx.restore();
      }

      // Draw border if specified
      if (config.borderWidth > 0) {
        ctx.strokeStyle = config.borderColor;
        ctx.lineWidth = config.borderWidth;
        
        if (config.borderRadius > 0) {
          drawRoundedRect(ctx, 0, 0, canvas.width, canvas.height, config.borderRadius);
          ctx.stroke();
        } else {
          ctx.strokeRect(0, 0, canvas.width, canvas.height);
        }
      }

      // Draw frame if specified
      if (config.frameStyle !== 'none') {
        drawFrame(ctx, canvas.width, canvas.height);
      }

    } catch (error) {
      console.error('Error in drawCustomQR:', error);
      throw error;
    }
  };

  const drawDot = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, style: DotStyle | EyeStyle, fillStyle: string | CanvasGradient) => {
    ctx.save();
    ctx.fillStyle = fillStyle;
    
    switch (style) {
      case 'circle':
        ctx.beginPath();
        ctx.arc(x + size/2, y + size/2, size/2, 0, 2 * Math.PI);
        ctx.fill();
        break;
      case 'rounded':
        drawRoundedRect(ctx, x, y, size, size, size * 0.3);
        ctx.fill();
        break;
      case 'diamond':
        ctx.beginPath();
        ctx.moveTo(x + size/2, y);
        ctx.lineTo(x + size, y + size/2);
        ctx.lineTo(x + size/2, y + size);
        ctx.lineTo(x, y + size/2);
        ctx.closePath();
        ctx.fill();
        break;
      case 'leaf':
        ctx.beginPath();
        ctx.moveTo(x, y + size);
        ctx.quadraticCurveTo(x, y, x + size/2, y);
        ctx.quadraticCurveTo(x + size, y, x + size, y + size);
        ctx.quadraticCurveTo(x + size/2, y + size/2, x, y + size);
        ctx.fill();
        break;
      default: // square
        ctx.fillRect(x, y, size, size);
        break;
    }
    
    ctx.restore();
  };

  const drawRoundedRect = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  };

  const drawFrame = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const frameWidth = 40;
    ctx.fillStyle = config.frameColor;
    
    switch (config.frameStyle) {
      case 'square':
        ctx.fillRect(0, 0, width, frameWidth);
        ctx.fillRect(0, height - frameWidth, width, frameWidth);
        ctx.fillRect(0, 0, frameWidth, height);
        ctx.fillRect(width - frameWidth, 0, frameWidth, height);
        break;
      case 'rounded':
        ctx.save();
        drawRoundedRect(ctx, 0, 0, width, height, 20);
        ctx.clip();
        ctx.fillRect(0, 0, width, frameWidth);
        ctx.fillRect(0, height - frameWidth, width, frameWidth);
        ctx.fillRect(0, 0, frameWidth, height);
        ctx.fillRect(width - frameWidth, 0, frameWidth, height);
        ctx.restore();
        break;
      case 'circle':
        ctx.beginPath();
        ctx.arc(width/2, frameWidth/2, frameWidth/2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(width/2, height - frameWidth/2, frameWidth/2, 0, 2 * Math.PI);
        ctx.fill();
        break;
    }

    if (config.frameText) {
      ctx.fillStyle = '#ffffff';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(config.frameText, width/2, frameWidth/2 + 6);
    }
  };

  const generateQR = async () => {
    if (!config.content.trim()) {
      toast.error('Please enter content for the QR code');
      return;
    }

    setIsGenerating(true);
    try {
      const qrContent = generateQRContent();
      const canvas = canvasRef.current;
      
      if (canvas) {
        await drawCustomQR(canvas, qrContent);
        const dataUrl = canvas.toDataURL('image/png');
        setQrDataUrl(dataUrl);
      }
    } catch (error) {
      console.error('Error generating QR code:', error);
      toast.error('Failed to generate QR code');
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadQR = () => {
    if (!qrDataUrl) return;
    
    const link = document.createElement('a');
    link.download = `qr-code-${Date.now()}.png`;
    link.href = qrDataUrl;
    link.click();
    toast.success('QR code downloaded successfully!');
  };

  const copyQR = async () => {
    if (!qrDataUrl) return;
    
    try {
      const response = await fetch(qrDataUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      toast.success('QR code copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy QR code');
    }
  };

  const resetConfig = () => {
    setConfig(defaultConfig);
    setQrDataUrl('');
    setLogoImage(null);
    setBackgroundImage(null);
    toast.success('Configuration reset to defaults');
  };

  const applyTemplate = (template: typeof brandedTemplates[0]) => {
    updateConfig(template.config);
    toast.success(`Applied ${template.name} template`);
  };

  const handleLogoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const dataUrl = await fileToDataUrl(file);
        const img = await loadImage(dataUrl);
        setLogoImage(img);
        updateConfig({ logoFile: file, logoUrl: dataUrl });
        toast.success('Logo uploaded successfully');
      } catch (error) {
        console.error('Error loading logo:', error);
        toast.error('Failed to load logo image');
      }
    }
  };

  const handleBackgroundUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const dataUrl = await fileToDataUrl(file);
        const img = await loadImage(dataUrl);
        setBackgroundImage(img);
        updateConfig({ backgroundImageFile: file, backgroundImageUrl: dataUrl });
        toast.success('Background image uploaded successfully');
      } catch (error) {
        console.error('Error loading background image:', error);
        toast.error('Failed to load background image');
      }
    }
  };

  const removeLogo = () => {
    setLogoImage(null);
    updateConfig({ logoFile: null, logoUrl: '' });
    toast.success('Logo removed');
  };

  const removeBackground = () => {
    setBackgroundImage(null);
    updateConfig({ backgroundImageFile: null, backgroundImageUrl: '' });
    toast.success('Background image removed');
  };

  // Load images when config changes
  useEffect(() => {
    const loadImages = async () => {
      // Load logo
      if (config.logoUrl && !logoImage) {
        try {
          const img = await loadImage(config.logoUrl);
          setLogoImage(img);
        } catch (error) {
          console.warn('Failed to load logo:', error);
        }
      }

      // Load background image
      if (config.backgroundImageUrl && !backgroundImage) {
        try {
          const img = await loadImage(config.backgroundImageUrl);
          setBackgroundImage(img);
        } catch (error) {
          console.warn('Failed to load background image:', error);
        }
      }
    };

    loadImages();
  }, [config.logoUrl, config.backgroundImageUrl, logoImage, backgroundImage]);

  useEffect(() => {
    generateQR();
  }, [config, logoImage, backgroundImage]);

  const selectedQRType = qrTypes.find(type => type.value === config.type);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={onBack} size="sm" className="border-pink-300 text-pink-600 hover:bg-pink-50">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">QR Studio</h1>
              <p className="text-sm text-gray-600">Create branded QR codes</p>
            </div>
          </div>
          <Button variant="outline" onClick={resetConfig} size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50">
            <RotateCcw className="w-4 h-4 mr-1" />
            Reset
          </Button>
        </div>

        {/* Main Content - Single Row Layout */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Side - QR Preview (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Eye className="w-4 h-4 text-pink-600" />
                  Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-3">
                <div className="relative bg-white p-3 rounded-lg shadow-inner">
                  {isGenerating ? (
                    <div className="w-[250px] h-[250px] flex items-center justify-center bg-gray-100 rounded-lg">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-pink-600"></div>
                    </div>
                  ) : (
                    <canvas
                      ref={canvasRef}
                      className="max-w-full h-auto rounded-lg"
                      style={{ width: '250px', height: '250px' }}
                    />
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <Button onClick={downloadQR} disabled={!qrDataUrl} size="sm" className="instagram-gradient hover:opacity-90 text-white border-0">
                    <Download className="w-3 h-3 mr-1" />
                    Download
                  </Button>
                  <Button variant="outline" onClick={copyQR} disabled={!qrDataUrl} size="sm" className="border-pink-300 text-pink-600 hover:bg-pink-50">
                    <Copy className="w-3 h-3 mr-1" />
                    Copy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Templates */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {brandedTemplates.map((template) => {
                    const IconComponent = template.icon;
                    return (
                      <Button
                        key={template.id}
                        variant="outline"
                        onClick={() => applyTemplate(template)}
                        size="sm"
                        className="h-auto p-2 flex flex-col items-center space-y-1 border-gray-200 hover:border-pink-300 hover:bg-pink-50"
                      >
                        <IconComponent className="w-4 h-4 text-gray-600" />
                        <span className="text-xs font-medium">{template.name}</span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Configuration (3 columns) */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="data" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="data" className="flex items-center gap-1 text-sm">
                  <Type className="w-3 h-3" />
                  Data
                </TabsTrigger>
                <TabsTrigger value="style" className="flex items-center gap-1 text-sm">
                  <Palette className="w-3 h-3" />
                  Style
                </TabsTrigger>
              </TabsList>

              {/* Data Configuration */}
              <TabsContent value="data" className="space-y-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-4">
                    <Accordion type="single" collapsible defaultValue="qr-type">
                      <AccordionItem value="qr-type">
                        <AccordionTrigger className="text-sm font-semibold">QR Code Type & Mode</AccordionTrigger>
                        <AccordionContent className="space-y-4">
                          {/* Static/Dynamic Toggle */}
                          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <div className={`p-2 rounded-lg ${config.isDynamic ? 'bg-purple-500' : 'bg-blue-500'}`}>
                                {config.isDynamic ? <Zap className="w-4 h-4 text-white" /> : <Shield className="w-4 h-4 text-white" />}
                              </div>
                              <div>
                                <Label className="text-sm font-medium">
                                  {config.isDynamic ? 'Dynamic QR' : 'Static QR'}
                                </Label>
                                <p className="text-xs text-gray-600">
                                  {config.isDynamic ? 'Editable content, trackable' : 'Fixed content, no tracking'}
                                </p>
                              </div>
                            </div>
                            <Switch
                              checked={config.isDynamic}
                              onCheckedChange={(checked) => updateConfig({ isDynamic: checked })}
                            />
                          </div>

                          {/* QR Type Selection */}
                          <div className="grid grid-cols-3 gap-2">
                            {qrTypes.map((type) => {
                              const IconComponent = type.icon;
                              return (
                                <Button
                                  key={type.value}
                                  variant={config.type === type.value ? "default" : "outline"}
                                  onClick={() => updateConfig({ type: type.value as QRType })}
                                  size="sm"
                                  className={`h-auto p-2 flex flex-col items-center space-y-1 ${
                                    config.type === type.value 
                                      ? 'instagram-gradient text-white border-0' 
                                      : 'border-gray-200 hover:border-pink-300'
                                  }`}
                                >
                                  <IconComponent className="w-3 h-3" />
                                  <span className="text-xs">{type.label}</span>
                                </Button>
                              );
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="content">
                        <AccordionTrigger className="text-sm font-semibold">Content</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                          <div>
                            <Label htmlFor="content" className="text-sm">
                              {selectedQRType?.label} Content
                            </Label>
                            <Textarea
                              id="content"
                              value={config.content}
                              onChange={(e) => updateConfig({ content: e.target.value })}
                              placeholder={selectedQRType?.placeholder}
                              className="mt-1"
                              rows={2}
                            />
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="settings">
                        <AccordionTrigger className="text-sm font-semibold">QR Settings</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <Label className="text-sm">Error Correction</Label>
                              <Select value={config.errorCorrectionLevel} onValueChange={(value: 'L' | 'M' | 'Q' | 'H') => updateConfig({ errorCorrectionLevel: value })}>
                                <SelectTrigger className="mt-1 h-8">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="L">Low (7%)</SelectItem>
                                  <SelectItem value="M">Medium (15%)</SelectItem>
                                  <SelectItem value="Q">Quartile (25%)</SelectItem>
                                  <SelectItem value="H">High (30%)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label className="text-sm">Size: {config.size}px</Label>
                              <Slider
                                value={[config.size]}
                                onValueChange={([value]) => updateConfig({ size: value })}
                                min={200}
                                max={600}
                                step={50}
                                className="mt-2"
                              />
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Style Configuration */}
              <TabsContent value="style" className="space-y-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-4">
                    <Accordion type="multiple" defaultValue={["colors", "patterns"]}>
                      <AccordionItem value="colors">
                        <AccordionTrigger className="text-sm font-semibold">Colors & Gradients</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <Label className="text-sm">Foreground</Label>
                              <div className="flex items-center space-x-2 mt-1">
                                <Input
                                  type="color"
                                  value={config.foregroundColor}
                                  onChange={(e) => updateConfig({ foregroundColor: e.target.value })}
                                  className="w-8 h-8 p-1 border rounded"
                                />
                                <Input
                                  value={config.foregroundColor}
                                  onChange={(e) => updateConfig({ foregroundColor: e.target.value })}
                                  className="flex-1 h-8 text-xs"
                                />
                              </div>
                            </div>
                            <div>
                              <Label className="text-sm">Background</Label>
                              <div className="flex items-center space-x-2 mt-1">
                                <Input
                                  type="color"
                                  value={config.backgroundColor}
                                  onChange={(e) => updateConfig({ backgroundColor: e.target.value })}
                                  className="w-8 h-8 p-1 border rounded"
                                />
                                <Input
                                  value={config.backgroundColor}
                                  onChange={(e) => updateConfig({ backgroundColor: e.target.value })}
                                  className="flex-1 h-8 text-xs"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Gradient Toggle */}
                          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                            <Label className="text-sm">Enable Gradient</Label>
                            <Switch
                              checked={config.gradientEnabled}
                              onCheckedChange={(checked) => updateConfig({ gradientEnabled: checked })}
                            />
                          </div>

                          {config.gradientEnabled && (
                            <div>
                              <Label className="text-sm">Gradient Color</Label>
                              <div className="flex items-center space-x-2 mt-1">
                                <Input
                                  type="color"
                                  value={config.gradientColor}
                                  onChange={(e) => updateConfig({ gradientColor: e.target.value })}
                                  className="w-8 h-8 p-1 border rounded"
                                />
                                <Input
                                  value={config.gradientColor}
                                  onChange={(e) => updateConfig({ gradientColor: e.target.value })}
                                  className="flex-1 h-8 text-xs"
                                />
                              </div>
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="patterns">
                        <AccordionTrigger className="text-sm font-semibold">Pattern & Corner Styles</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                          <div>
                            <Label className="text-sm">Dot Style</Label>
                            <div className="grid grid-cols-4 gap-1 mt-2">
                              {(['square', 'circle', 'rounded', 'diamond'] as DotStyle[]).map((style) => (
                                <Button
                                  key={style}
                                  variant={config.dotStyle === style ? "default" : "outline"}
                                  onClick={() => updateConfig({ dotStyle: style })}
                                  size="sm"
                                  className={`h-8 text-xs ${
                                    config.dotStyle === style ? 'instagram-gradient text-white border-0' : ''
                                  }`}
                                >
                                  {style === 'square' && <Square className="w-3 h-3" />}
                                  {style === 'circle' && <Circle className="w-3 h-3" />}
                                  {style === 'rounded' && <Square className="w-3 h-3" />}
                                  {style === 'diamond' && <Square className="w-3 h-3" />}
                                </Button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <Label className="text-sm">Eye Style</Label>
                            <div className="grid grid-cols-4 gap-1 mt-2">
                              {(['square', 'circle', 'rounded', 'leaf'] as EyeStyle[]).map((style) => (
                                <Button
                                  key={style}
                                  variant={config.eyeStyle === style ? "default" : "outline"}
                                  onClick={() => updateConfig({ eyeStyle: style })}
                                  size="sm"
                                  className={`h-8 text-xs ${
                                    config.eyeStyle === style ? 'instagram-gradient text-white border-0' : ''
                                  }`}
                                >
                                  {style === 'square' && <Square className="w-3 h-3" />}
                                  {style === 'circle' && <Circle className="w-3 h-3" />}
                                  {style === 'rounded' && <Square className="w-3 h-3" />}
                                  {style === 'leaf' && <Square className="w-3 h-3" />}
                                </Button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <Label className="text-sm">Dot Spacing: {config.dotPadding}px</Label>
                            <Slider
                              value={[config.dotPadding]}
                              onValueChange={([value]) => updateConfig({ dotPadding: value })}
                              min={0}
                              max={5}
                              step={0.5}
                              className="mt-2"
                            />
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="border">
                        <AccordionTrigger className="text-sm font-semibold">Border & Frame</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <Label className="text-sm">Border Width: {config.borderWidth}px</Label>
                              <Slider
                                value={[config.borderWidth]}
                                onValueChange={([value]) => updateConfig({ borderWidth: value })}
                                min={0}
                                max={10}
                                step={1}
                                className="mt-2"
                              />
                            </div>
                            <div>
                              <Label className="text-sm">Border Radius: {config.borderRadius}px</Label>
                              <Slider
                                value={[config.borderRadius]}
                                onValueChange={([value]) => updateConfig({ borderRadius: value })}
                                min={0}
                                max={50}
                                step={5}
                                className="mt-2"
                              />
                            </div>
                          </div>

                          <div>
                            <Label className="text-sm">Frame Style</Label>
                            <Select value={config.frameStyle} onValueChange={(value: FrameStyle) => updateConfig({ frameStyle: value })}>
                              <SelectTrigger className="mt-1 h-8">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">None</SelectItem>
                                <SelectItem value="square">Square</SelectItem>
                                <SelectItem value="rounded">Rounded</SelectItem>
                                <SelectItem value="circle">Circle</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          {config.frameStyle !== 'none' && (
                            <div>
                              <Label className="text-sm">Frame Text</Label>
                              <Input
                                value={config.frameText}
                                onChange={(e) => updateConfig({ frameText: e.target.value })}
                                placeholder="Enter frame text"
                                className="mt-1 h-8"
                              />
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="images">
                        <AccordionTrigger className="text-sm font-semibold">Logo & Background</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                          <div>
                            <Label className="text-sm">Center Logo</Label>
                            <div className="flex items-center space-x-2 mt-2">
                              <Button
                                variant="outline"
                                onClick={() => logoInputRef.current?.click()}
                                size="sm"
                                className="border-pink-300 text-pink-600 hover:bg-pink-50"
                              >
                                <Upload className="w-3 h-3 mr-1" />
                                Upload
                              </Button>
                              {logoImage && (
                                <Button
                                  variant="outline"
                                  onClick={removeLogo}
                                  size="sm"
                                  className="border-red-300 text-red-600 hover:bg-red-50"
                                >
                                  Remove
                                </Button>
                              )}
                              {logoImage && (
                                <Badge variant="secondary" className="text-xs">
                                  Logo loaded
                                </Badge>
                              )}
                            </div>
                            <input
                              ref={logoInputRef}
                              type="file"
                              accept="image/*"
                              onChange={handleLogoUpload}
                              className="hidden"
                            />
                          </div>

                          {logoImage && (
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <Label className="text-sm">Logo Size: {config.logoSize}%</Label>
                                <Slider
                                  value={[config.logoSize]}
                                  onValueChange={([value]) => updateConfig({ logoSize: value })}
                                  min={10}
                                  max={50}
                                  step={5}
                                  className="mt-2"
                                />
                              </div>
                              <div>
                                <Label className="text-sm">Logo Opacity: {config.logoOpacity}%</Label>
                                <Slider
                                  value={[config.logoOpacity]}
                                  onValueChange={([value]) => updateConfig({ logoOpacity: value })}
                                  min={10}
                                  max={100}
                                  step={10}
                                  className="mt-2"
                                />
                              </div>
                            </div>
                          )}

                          <div>
                            <Label className="text-sm">Background Image</Label>
                            <div className="flex items-center space-x-2 mt-2">
                              <Button
                                variant="outline"
                                onClick={() => backgroundInputRef.current?.click()}
                                size="sm"
                                className="border-purple-300 text-purple-600 hover:bg-purple-50"
                              >
                                <ImageIcon className="w-3 h-3 mr-1" />
                                Upload
                              </Button>
                              {backgroundImage && (
                                <Button
                                  variant="outline"
                                  onClick={removeBackground}
                                  size="sm"
                                  className="border-red-300 text-red-600 hover:bg-red-50"
                                >
                                  Remove
                                </Button>
                              )}
                              {backgroundImage && (
                                <Badge variant="secondary" className="text-xs">
                                  Background loaded
                                </Badge>
                              )}
                            </div>
                            <input
                              ref={backgroundInputRef}
                              type="file"
                              accept="image/*"
                              onChange={handleBackgroundUpload}
                              className="hidden"
                            />
                          </div>

                          {backgroundImage && (
                            <div>
                              <Label className="text-sm">Background Opacity: {config.backgroundImageOpacity}%</Label>
                              <Slider
                                value={[config.backgroundImageOpacity]}
                                onValueChange={([value]) => updateConfig({ backgroundImageOpacity: value })}
                                min={10}
                                max={100}
                                step={10}
                                className="mt-2"
                              />
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}