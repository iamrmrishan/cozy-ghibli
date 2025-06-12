"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, ChevronUp, ImageIcon, Video, Wand2 } from "lucide-react"

export default function ImageGenerator() {
  const [description, setDescription] = useState("")
  const [aspectRatio, setAspectRatio] = useState([1])
  const [selectedModel, setSelectedModel] = useState("auto")
  const [generateVideo, setGenerateVideo] = useState(false)
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const aspectRatioLabels = {
    0: "1:2 (Portrait)",
    0.25: "2:3 (Portrait)",
    0.5: "3:4 (Portrait)",
    0.75: "4:5 (Portrait)",
    1: "1:1 (Square)",
    1.25: "5:4 (Landscape)",
    1.5: "4:3 (Landscape)",
    1.75: "3:2 (Landscape)",
    2: "2:1 (Landscape)",
  }

  const getCurrentAspectRatio = () => {
    const value = aspectRatio[0]
    const closest = Object.keys(aspectRatioLabels).reduce((prev, curr) =>
      Math.abs(Number(curr) - value) < Math.abs(Number(prev) - value) ? curr : prev,
    )
    return aspectRatioLabels[Number(closest) as keyof typeof aspectRatioLabels]
  }

  const handleGenerate = async () => {
    if (!description.trim()) return

    setIsGenerating(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsGenerating(false)
  }

  return (
    <div className="w-full p-0 space-y-6">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
            {generateVideo ? <Video className="h-5 w-5" /> : <ImageIcon className="h-5 w-5" />}
            {generateVideo ? "Video" : "Image"} Generator
          </CardTitle>
          <CardDescription>
            Create stunning {generateVideo ? "videos" : "images"} from text descriptions using AI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 mt-13">
          {/* Description Input */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Describe what you want to generate... (e.g., A serene mountain landscape at sunset with a crystal clear lake)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px] resize-none"
              maxLength={500}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Be as descriptive as possible for better results</span>
              <span>{description.length}/500</span>
            </div>
          </div>

          {/* Aspect Ratio Slider */}
          <div className="space-y-3 mb-10 mt-10">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Aspect Ratio</Label>
              <Badge variant="secondary" className="text-xs">
                {getCurrentAspectRatio()}
              </Badge>
            </div>
            <Slider value={aspectRatio} onValueChange={setAspectRatio} max={2} min={0} step={0.25} className="w-full" />
            <div className="flex justify-between text-xs text-muted-foreground px-1">
              <span>Portrait</span>
              <span>Square</span>
              <span>Landscape</span>
            </div>
          </div>

          {/* Model Selection */}
          <div className="space-y-2 mb-10 mt-10">
            <Label htmlFor="model" className="text-sm font-medium">
              Model
            </Label>
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger>
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto Select (Recommended)</SelectItem>
                <SelectItem value="dall-e-3">DALL-E 3</SelectItem>
                <SelectItem value="midjourney">Midjourney</SelectItem>
                <SelectItem value="stable-diffusion">Stable Diffusion XL</SelectItem>
                <SelectItem value="flux">Flux Pro</SelectItem>
                <SelectItem value="ideogram">Ideogram</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Auto select will choose the best model based on your description
            </p>
          </div>

          {/* Advanced Settings */}
          <Collapsible open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                <span className="text-sm font-medium">Advanced Settings</span>
                {isAdvancedOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 pt-4">
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">Generate Video</Label>
                  <p className="text-xs text-muted-foreground">Create a short video instead of a static image</p>
                </div>
                <Switch checked={generateVideo} onCheckedChange={setGenerateVideo} />
              </div>
              {generateVideo && (
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    Video generation may take longer and uses more credits
                  </p>
                </div>
              )}
            </CollapsibleContent>
          </Collapsible>

          {/* Generate Button */}
          <Button onClick={handleGenerate} disabled={!description.trim() || isGenerating} className="w-full" size="lg">
            {isGenerating ? (
              <>
                <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                Generating {generateVideo ? "Video" : "Image"}...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate {generateVideo ? "Video" : "Image"}
              </>
            )}
          </Button>

          {/* Generation Info */}
          <div className="bg-muted/30 p-3 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              {generateVideo
                ? "Video generation typically takes 2-5 minutes"
                : "Image generation typically takes 10-30 seconds"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


