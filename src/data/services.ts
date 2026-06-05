export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

export const services: ServiceCard[] = [
  {
    icon: "car",
    title: "Automotor",
    description: "Protegé tu vehículo con la cobertura más completa del mercado."
  },
  {
    icon: "home",
    title: "Hogar",
    description: "Asegurá tu casa y tus bienes ante cualquier imprevisto."
  },
  {
    icon: "heart",
    title: "Vida",
    description: "Garantizá el bienestar de tu familia con un seguro de vida."
  },
  {
    icon: "briefcase",
    title: "Comercio / Mala Praxis",
    description: "Cobertura integral para tu negocio y actividad profesional."
  }
];
