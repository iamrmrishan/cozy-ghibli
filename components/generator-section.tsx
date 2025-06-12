'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
//   PopoverClose,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Switch } from "@/components/ui/switch";
import { X, ChevronDown, ChevronUp } from "lucide-react";

export function ImageGeneratorForm() {
  const [aspect, setAspect] = useState(2);
  const [openCollapse, setOpenCollapse] = useState(false);

  const aspectLabels = ["1:1", "4:3", "3:4 Tall", "9:16", "16:9"];

  return (
    <div className="flex flex-col lg:flex-row w-full mx-auto p-4 gap-6">
      {/* Left side: form (2/6) */}
      <div className="w-full lg:w-1/3 space-y-6">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <span>Aspect Ratio: {aspectLabels[aspect]}</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-4 bg-popover rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">Aspect Ratio</span>
              {/* <PopoverClose asChild> */}
                <Button variant="ghost" size="icon">
                  <X className="w-4 h-4" />
                </Button>
              {/* </PopoverClose> */}
            </div>
            <Slider
              className="w-full"
              value={[aspect]}
              step={1}
              max={4}
              onValueChange={(val) => setAspect(val[0])}
            >
              {/* <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumb /> */}
            </Slider>
            <div className="mt-2 text-center text-sm">
              {aspectLabels[aspect]}
            </div>
          </PopoverContent>
        </Popover>

        <Textarea placeholder="Image Description" />

        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Auto-Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="auto">Auto-Select</SelectItem>
            <SelectItem value="modelA">Model A</SelectItem>
            <SelectItem value="modelB">Model B</SelectItem>
          </SelectContent>
        </Select>

        <Button className="w-full">Generate</Button>

        <Collapsible open={openCollapse} onOpenChange={setOpenCollapse}>
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between cursor-pointer">
              <span className="font-medium">Advanced settings</span>
              <ChevronUp
                className={`w-4 h-4 transition-transform ${
                  openCollapse ? "rotate-180" : ""
                }`}
              />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4 flex items-center space-x-2">
            <Label htmlFor="generate-video">Generate video</Label>
            <Switch id="generate-video" />
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Right side: image preview placeholder (4/6) */}
      <div className="w-full lg:w-2/3 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
        <span className="text-gray-500">Image preview</span>
      </div>
    </div>
  );
}


