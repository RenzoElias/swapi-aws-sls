// src/infrastructure/adapters/SwapiAdapter.ts
import axios from 'axios';

const translateParameters = (data: any) => {
  const mapping: Record<string, string> = {
    name: 'nombre',
    height: 'altura',
    mass: 'masa',
    hair_color: 'color_cabello',
    skin_color: 'color_piel',
    eye_color: 'color_ojos',
    birth_year: 'año_nacimiento',
    gender: 'genero',
    homeworld: 'planeta_natal',
    films: 'peliculas',
    species: 'especies',
    vehicles: 'vehiculos',
    starships: 'naves_estelares',
    created: 'creado',
    edited: 'editado',
    url: 'enlace',
  };

  const translatedData: Record<string, string> = {};

  for (const key in data) {
    if (mapping.hasOwnProperty(key)) {
      translatedData[mapping[key]] = data[key];
    } else {
      translatedData[key] = data[key];
    }
  }

  return translatedData;
};

const SwapiAdapter = {
  getJediData: async () => {
    const response = await axios.get('https://swapi.py4e.com/api/people/1');
    const rawData = response.data;
    return translateParameters(rawData);
  },
};

export default SwapiAdapter;
