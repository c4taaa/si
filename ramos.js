const ramos = [
  { id: 'fundamentos', nombre: 'Fundamentos de la profesión', semestre: 1 },
  { id: 'anatomia', nombre: 'Anatomía descriptiva', semestre: 1 },
  { id: 'antropologia', nombre: 'Antropología', semestre: 1 },
  { id: 'psicologia', nombre: 'Psicología del ciclo vital', semestre: 1 },
  { id: 'saludpublica', nombre: 'Salud pública', semestre: 1 },
  { id: 'ingles1', nombre: 'Inglés funcional I', semestre: 1 },

  { id: 'educacion', nombre: 'Educación para la salud', semestre: 2, req: ['fundamentos'] },
  { id: 'saludfamiliar', nombre: 'Salud familiar y comunitaria', semestre: 2, req: ['saludpublica', 'psicologia'] },
  { id: 'quimica', nombre: 'Química general y orgánica básica', semestre: 2, req: ['anatomia'] },
  { id: 'biologia', nombre: 'Biología celular y tisular', semestre: 2, req: ['anatomia'] },
  { id: 'sociologia', nombre: 'Sociología', semestre: 2, req: ['antropologia', 'psicologia', 'saludpublica'] },
  { id: 'desarrollo1', nombre: 'Desarrollo personal I', semestre: 2, req: ['fundamentos', 'psicologia'] },

  { id: 'bases', nombre: 'Bases de enfermería', semestre: 3, req: ['biologia', 'anatomia'] },
  { id: 'sexualidad', nombre: 'Sexualidad humana', semestre: 3, req: ['psicologia'] },
  { id: 'fisiologia', nombre: 'Fisiología humana', semestre: 3, req: ['quimica', 'biologia', 'anatomia'] },
  { id: 'embriologia', nombre: 'Embriología humana y genética', semestre: 3, req: ['anatomia', 'biologia'] },
  { id: 'bioquimica', nombre: 'Bioquímica', semestre: 3, req: ['quimica', 'biologia'] },
  { id: 'desarrollo2', nombre: 'Desarrollo personal II', semestre: 3, req: ['desarrollo1'] },
  { id: 'etica', nombre: 'Ética y bioética', semestre: 3, req: ['desarrollo1'] },

  { id: 'preclinico', nombre: 'Preclínico de enfermería', semestre: 4, req: ['bases', 'fisiologia'] },
  { id: 'obstetricia', nombre: 'Obstetricia', semestre: 4, req: ['bioquimica', 'fisiologia', 'embriologia'] },
  { id: 'neonatologia', nombre: 'Neonatología', semestre: 4, req: ['bioquimica', 'fisiologia', 'embriologia'] },
  { id: 'gine1', nombre: 'Ginecología I', semestre: 4, req: ['bioquimica', 'fisiologia', 'sexualidad'] },
  { id: 'farmacologia', nombre: 'Farmacología', semestre: 4, req: ['bioquimica', 'fisiologia'] },
  { id: 'fisiopatologia', nombre: 'Fisiopatología', semestre: 4, req: ['bioquimica', 'fisiologia'] },

  { id: 'preclinico_peri', nombre: 'Preclínico perinatal y ginecológico', semestre: 5, req: ['preclinico', 'obstetricia', 'neonatologia', 'gine1', 'farmacologia'] },
  { id: 'morbilidad', nombre: 'Morbilidad obstétrica y neonatal', semestre: 5, req: ['fisiopatologia', 'obstetricia', 'neonatologia', 'farmacologia'] },
  { id: 'microbiologia', nombre: 'Microbiología', semestre: 5, req: ['fisiopatologia'] },
  { id: 'administracion', nombre: 'Administración', semestre: 5, req: ['desarrollo2'] },
  { id: 'complementario', nombre: 'Complementario', semestre: 5 },

  { id: 'atencion', nombre: 'Atención perinatal y ginecológica', semestre: 6, req: ['preclinico_peri', 'morbilidad', 'microbiologia'] },
  { id: 'gine2', nombre: 'Ginecología II', semestre: 6, req: ['microbiologia'] },
  { id: 'investigacion', nombre: 'Investigación científica', semestre: 6 },
  { id: 'electivo', nombre: 'Electivo', semestre: 6 },

  { id: 'gestion1', nombre: 'Gestión y atención gineco-obstétrica neonatal I', semestre: 7, req: ['atencion', 'gine2'] },
  { id: 'seminario', nombre: 'Seminario de investigación', semestre: 7, req: ['investigacion'] },

  { id: 'gestion2', nombre: 'Gestión y atención gineco-obstétrica neonatal II', semestre: 8, req: ['gestion1'] },

  { id: 'clinica', nombre: 'Clínica de especialidades', semestre: 9 },
  { id: 'gestionproy', nombre: 'Gestión y proyecto', semestre: 9 },

  { id: 'habilitacion', nombre: 'Habilitación profesional', semestre: 10 }
];
