import { NextResponse } from "next/server";
import { animationRegistry, getAnimationById } from "@/lib/components-registry";

/**
 * GET handler for registry
 * Returns component data from components-registry.tsx
 * Compatible with shadcn registry format
 * 
 * @param request - Next.js request object
 * @param params - Route parameters containing the component name
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params;

    // If name is provided, return specific component
    if (name && name !== "index") {
      const animation = getAnimationById(name);
      
      if (!animation) {
        return NextResponse.json(
          { error: `Component "${name}" not found` },
          { status: 404 }
        );
      }

      // Return component data
      return NextResponse.json(
        {
          id: animation.id,
          name: animation.name,
          description: animation.description,
          category: animation.category,
          tags: animation.tags,
          duration: animation.duration,
          easing: animation.easing,
          display: animation.display,
          code: animation.code,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control":
              "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        }
      );
    }

    // Return full registry (all components)
    const registry = animationRegistry.map((anim) => ({
      id: anim.id,
      name: anim.name,
      description: anim.description,
      category: anim.category,
      tags: anim.tags,
      duration: anim.duration,
      easing: anim.easing,
      display: anim.display,
    }));

    return NextResponse.json(
      {
        items: registry,
        total: registry.length,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    console.error("Registry API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
