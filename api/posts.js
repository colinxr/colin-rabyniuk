import Prismic from 'prismic-javascript'

export const getPosts = async (type, page) => {
  return await Prismic.getApi('https://colin-rabyniuk.cdn.prismic.io/api/v2')
    .then(api => api.query(
      Prismic.Predicates.at('document.type', 'post'),
      {pageSize: 10, page: 1}
    ))
    .then(data => data.results)
}

export const getPostBySlug = async (uid) => {
  return await Prismic.getApi('https://colin-rabyniuk.cdn.prismic.io/api/v2')
    .then(api => api.getByUID('post', uid))
    .then(data => data)
}

export default {getPosts, getPostBySlug}