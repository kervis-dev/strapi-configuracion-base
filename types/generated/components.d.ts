import type { Schema, Attribute } from '@strapi/strapi';

export interface RedesRedesSociales extends Schema.Component {
  collectionName: 'components_redes_redes_sociales';
  info: {
    displayName: 'redes sociales';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface ProjectEspecificacion extends Schema.Component {
  collectionName: 'components_project_especificacions';
  info: {
    displayName: 'especificacion';
  };
  attributes: {};
}

export interface ProjectDescriptionDetail extends Schema.Component {
  collectionName: 'components_project_description_details';
  info: {
    displayName: 'descriptionDetail';
  };
  attributes: {
    titulo: Attribute.String;
    resumen: Attribute.RichText;
    imagen: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ExperienciaTegnologias extends Schema.Component {
  collectionName: 'components_experiencia_tegnologias';
  info: {
    displayName: 'tegnologias';
  };
  attributes: {
    title: Attribute.String;
    ano: Attribute.String;
  };
}

export interface ExperienciaProyecto extends Schema.Component {
  collectionName: 'components_experiencia_proyectos';
  info: {
    displayName: 'proyecto';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    imagen: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Attribute.String;
    resumen: Attribute.RichText;
  };
}

export interface ExperienciaExperiencia extends Schema.Component {
  collectionName: 'components_experiencia_experiencias';
  info: {
    displayName: 'experiencia';
    description: '';
  };
  attributes: {
    Puesto: Attribute.String;
    empresa: Attribute.String;
    explicacion: Attribute.Component<'experiencia.proyecto', true>;
    description: Attribute.RichText;
    inicio: Attribute.Date;
    fin: Attribute.Date;
  };
}

export interface RepetibleTagsSection extends Schema.Component {
  collectionName: 'components_repetible_tags_sections';
  info: {
    displayName: 'tags section';
  };
  attributes: {
    tecnologia: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'redes.redes-sociales': RedesRedesSociales;
      'project.especificacion': ProjectEspecificacion;
      'project.description-detail': ProjectDescriptionDetail;
      'experiencia.tegnologias': ExperienciaTegnologias;
      'experiencia.proyecto': ExperienciaProyecto;
      'experiencia.experiencia': ExperienciaExperiencia;
      'repetible.tags-section': RepetibleTagsSection;
    }
  }
}
