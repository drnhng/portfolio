import Image from "next/image";

const technologies = [
  {
    category: "Backend",
    items: [
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "NextJS", icon: "/icons/nextjs.svg" },
      { name: "Node", icon: "/icons/node.svg" },
      { name: "PHP", icon: "/icons/php.svg" },
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    ]
  },
  // Add more categories...
];

export function TechnologyGrid() {
  return (
    <div className="space-y-8">
      {technologies.map((category) => (
        <div key={category.category} className="space-y-4">
          <h4 className="text-lg font-medium">{category.category}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {category.items.map((tech) => (
              <div
                key={tech.name}
                className="bg-card-bg p-4 rounded-lg flex items-center gap-3"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={24}
                  height={24}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 