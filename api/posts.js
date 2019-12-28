import Prismic from 'prismic-javascript'

export const getPosts = async (type, page) => {
  return await Prismic.getApi('https://colin-rabyniuk.cdn.prismic.io/api/v2')
    .then(api => api.query(
      Prismic.Predicates.at('document.type', type), {
        pageSize: 10, 
        page: page,
        fetch: [`${type}.title`, `${type}.uid`, `${type}.text`, `${type}.excerpt`, `${ type }.published`],
        orderings: `[my.${type}.published desc]`
      }
    ))
}

export const getPostBySlug = async (type, uid) => {
  return await Prismic.getApi('https://colin-rabyniuk.cdn.prismic.io/api/v2')
    .then(api => api.getByUID(type, uid))
}

export default {getPosts, getPostBySlug}