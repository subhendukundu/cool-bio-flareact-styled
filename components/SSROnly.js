import styled from '@xstyled/styled-components'

const SSROnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0px;
  overflow: hidden;
  clip: rect(0px, 0px, 0px, 0px);
  border: 0px;
`

SSROnly.propTypes = {}

export default SSROnly
