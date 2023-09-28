import * as api from "../utils/index";

export const useMaterials = () => {
  //
  const consultMaterials = async () => {
    const data = await api.consultMaterials();
    return data;
  };

  const insertResources = async (body) => {
    const data = await api.insertResources(body);
    return data;
  };

  const deleteMaterials = async (body) => {
    const data = await api.deleteMaterials(body);
    return data;
  };

  const editaMateriales = async (body) => {
    const data = await api.editarMateriales(body);
    return data;
  }

  return {
    consultMaterials,
    insertResources,
    deleteMaterials,
    editaMateriales,
  };
};
