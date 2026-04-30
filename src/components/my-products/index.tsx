import { Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default async function MyProducts() {
  let htmlContent = "";
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/meetqy/meetqy/refs/heads/main/README.md",
      { next: { revalidate: 3600 } },
    );
    htmlContent = await res.text();
  } catch (err) {
    console.error("Failed to fetch products:", err);
  }

  if (!htmlContent) return null;

  return (
    <Card className="w-full max-w-3xl mx-auto border-dashed">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Package className="size-5 text-primary" />
          <CardTitle className="text-lg">My Products</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div
          className="text-sm text-muted-foreground space-y-4 [&_a]:text-primary [&_a]:underline [&_ul]:list-disc [&_ul]:pl-4 [&_li]:mt-1"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </CardContent>
    </Card>
  );
}
