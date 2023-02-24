import styled from 'styled-components'

export const Container = styled.article`
  margin: 5rem auto;
  padding: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

export const PokeTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
`
export const PokeContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const PokeCard = styled.div`
  display: flex;
  margin: 0 auto;
  min-width: 300px;
  max-width: 300px;
  padding: 10px;
  height: max-content;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgContainer};
  box-shadow: ${({ theme }) => theme.boxShadow};
  justify-content: center;
  user-select: none;
  p {
    text-transform: capitalize;
    color: ${({ theme }) => theme.text};
  }
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`
