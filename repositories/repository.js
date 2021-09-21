
import CompanyRepository from '~/repositories/companies'
import service from '../api/index'

export default () => ({
  companyApi: CompanyRepository(service),
})
