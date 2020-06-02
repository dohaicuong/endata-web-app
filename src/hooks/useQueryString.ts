import { useLocation } from 'react-router-dom'
import qs from 'query-string'

const useQueryString = () => {
  const { search } = useLocation()
  const values = qs.parse(search)

  return values
}
export default useQueryString
