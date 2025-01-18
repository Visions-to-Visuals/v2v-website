# Component Creation Process

> This documentation is specifically for Cursor AI to follow when creating components from Figma designs. It ensures consistent implementation across the project.

This document outlines our standardized process for creating new components from Figma designs.

## User Instruction
1. I'll provide an image of the specific section in the figma design and add all required assets to the assets folder
2. You'll describe the image and give me pseudocode that would create that structure
3. **IMPORTANT**: Wait for explicit user confirmation on the pseudocode before proceeding
4. Only after user confirmation, create files and content for the section with very basic styling. (we'll be coming back to styling later)


## Step-by-Step Process

### 1. Design Analysis
- Receive Figma design image for the specific section from user
- Analyze the layout structure and component hierarchy
- Identify any required assets (images, icons, etc.)
- Ensure all required assets are added to the assets folder

### 2. Structure Planning (REQUIRES USER CONFIRMATION)
- Create pseudocode that outlines:
  - Component hierarchy
  - HTML structure
  - Parent-child relationships
  - Required props and interfaces
  - Basic component organization
- Present pseudocode to user
- **STOP HERE** and wait for explicit user confirmation
- Only proceed after receiving clear approval on the proposed structure

### 3. Initial Implementation (ONLY AFTER PSEUDOCODE APPROVAL)
Create the base component files with:
- Proper imports
- Basic JSX structure
- Component exports
- Asset implementations
- No styling except:
  - Flex directions (row/column)
  - Basic centering (items-center, justify-center)
  - Essential margin/padding
  - Basic spacing (gap)

### 4. Basic Layout Styling
Add only the following CSS properties using Tailwind classes:
- Flex layout properties (flex-row, flex-col)
- Centering utilities (items-center, text-center)
- Margin and padding for proper spacing
- Gap utilities for consistent spacing between elements
- Max-width constraints for content readability

## Example Implementation

```tsx
// Basic component structure with allowed styling
export function ExampleSection() {
  return (
    <section className="flex flex-col items-center text-center px-4 py-20 gap-6">
      <h1 className="max-w-3xl mb-4">Heading</h1>
      <p className="max-w-2xl mb-8">Content</p>
    </section>
  )
}
```

## Note
All other styling (colors, fonts, animations, etc.) will be implemented in a separate styling phase after the structure is approved. 