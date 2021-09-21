

import createRepository from '~/repositories/repository'

export default (ctx, inject) => {
  inject('repositories', createRepository())
}
