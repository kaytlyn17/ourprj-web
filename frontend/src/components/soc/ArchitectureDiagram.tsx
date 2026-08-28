const architectureLayers = [
  {
    title: "Virtualization",
    technology: "Proxmox",
    description: "Hosts the virtual SOC environment.",
  },
  {
    title: "Network Control",
    technology: "pfSense",
    description: "Routing, firewalling and network segmentation.",
  },
  {
    title: "Detection",
    technology: "Wazuh + Suricata",
    description: "Host and network security monitoring.",
  },
  {
    title: "Endpoints",
    technology: "Windows + Linux",
    description: "Systems used for monitoring and security experiments.",
  },
];

export default function ArchitectureDiagram() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {architectureLayers.map((layer, index) => (
        <div
          key={layer.title}
          className="relative rounded-xl border border-zinc-800 bg-zinc-900/40 p-6"
        >
          <p className="font-mono text-xs text-zinc-600">
            0{index + 1}
          </p>

          <p className="mt-4 text-sm text-zinc-500">
            {layer.title}
          </p>

          <h3 className="mt-1 text-lg font-semibold text-white">
            {layer.technology}
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            {layer.description}
          </p>
        </div>
      ))}
    </div>
  );
}