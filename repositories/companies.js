

export default (service) => ({
  async list() {
    return await service.get('companies');
  },
  async getFormById(id) {
    return await service.get(`companies/${id}/forms`);
  },
})
