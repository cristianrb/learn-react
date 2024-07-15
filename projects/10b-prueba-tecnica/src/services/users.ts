export const fetchUsers = ({ pageParam = 1 } : { pageParam: any}) => {
  return fetch(`https://randomuser.me/api?results=10&seed=cruizb&page=${pageParam}`)
      .then(async res => {
        if (!res.ok) {
          throw new Error("Error en la pticion")
        }
        return await res.json()
      })
      .then(res => {
        const currentPage = Number(res.info.page)
        const nextCursor = currentPage > 3 ? undefined : currentPage + 1

        return {
          users: res.results,
          nextCursor: nextCursor
        }
      })
}