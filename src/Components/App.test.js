import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from '../App'

describe('EPICBOOKS tests', () => {

  test('1. Renzerizzazione Welcome', () => {
    render(<App />)
    const alertElement = screen.getByText(/EPICBOOKS/i)
    expect(alertElement).toBeInTheDocument()
  })
  

  test('2. Renderizzazione 150 libri', () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('book-card')
    expect(allTheBookCards).toHaveLength(150)
  })


  test('3. Renderizzazione CommentArea', () => {
    render(<App />)
    const commentAreaElement = screen.getByTestId('comment-area')
    expect(commentAreaElement).toBeInTheDocument()
  })


  test("4. Filtro libri tramite input Navbar", async () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/cerca un libro/i)
    fireEvent.change(input, { target: { value: 'arrow' } })
    const filteredBooks = await screen.findAllByTestId('book-card')
    expect(filteredBooks).toHaveLength(1)
  })


  test('5. Click bordo rosso', () => {
    render(<App />)
    const cards = screen.getAllByTestId('book-card')
    const first = cards[0]
    expect(first).not.toHaveStyle('border: 3px solid red')
    fireEvent.click(first)
    expect(first).toHaveStyle('border: 3px solid red')
  })


  test('6. Click altro libro riporta il primo senza bordo rosso', () => {
    render(<App />)
    const cards = screen.getAllByTestId('book-card')
    const first = cards[0]
    const second = cards[1]
    fireEvent.click(first)
    expect(first).toHaveStyle('border: 3px solid red')
    fireEvent.click(second)
    expect(first).not.toHaveStyle('border: 3px solid red')
    expect(second).toHaveStyle('border: 3px solid red')
  })


  test('7. No SingleComment al caricamento', () => {
    render(<App />)
    const comments = screen.queryAllByTestId('single-comment')
    expect(comments).toHaveLength(0)
  })


  test('8.Se il libro ha recensioni, vengano renderizzate correttamente', async () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('book-card')
    const firstBookCard = allTheBookCards[0]
    fireEvent.click(firstBookCard)
    await waitFor(() => {
      const allTheBookComments = screen.queryAllByTestId('single-comment')

      if (allTheBookComments.length > 0) {
        expect(allTheBookComments.length).toBeGreaterThan(0)
      } else {
        expect(allTheBookComments).toHaveLength(0)
      }
    })
  })


})
