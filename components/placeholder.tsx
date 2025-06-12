"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageIcon, Download, Share2, Heart, MoreHorizontal } from "lucide-react"

export default function ImagePlaceholder() {
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 p-3 sm:p-6">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Generated Image</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex items-center justify-center py-4 sm:py-8">
            <div className="text-center space-y-4 max-w-md">
              {/* Placeholder Image */}
              <div className="w-full aspect-square max-w-full sm:max-w-sm mx-auto bg-muted rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <ImageIcon className="h-12 w-12 text-muted-foreground/50 mx-auto" />
                  <p className="text-sm text-muted-foreground">No image generated yet</p>
                </div>
              </div>

              {/* Placeholder Text */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-muted-foreground">Your generated image will appear here</h3>
                <p className="text-sm text-muted-foreground">
                  Enter a description and click generate to create your AI-powered image
                </p>
              </div>

              {/* Sample Badges */}
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">1024x1024</Badge>
                <Badge variant="secondary">Square</Badge>
                <Badge variant="secondary">Auto Model</Badge>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-4 p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Ready to generate</span>
              <span>Credits: 25 remaining</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


