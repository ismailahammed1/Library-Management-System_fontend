import { useState } from "react"
import { useAddBookMutation } from "@/redux/services/booksApi"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "react-toastify"


interface Props {
  onSuccess?: () => void
}

const AddBookForm = ({ onSuccess }: Props) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    bookImage: "",
    isbn: "",
    description: "",
    copies: 1,
    available: true,
  })

  const [addBook] = useAddBookMutation()

  const handleSubmit = async () => {
    try {
      await addBook(form).unwrap()
      setForm({
        title: "",
        author: "",
        genre: "",
        bookImage: "",
        isbn: "",
        description: "",
        copies: 1,
        available: true,
      })
      toast.success("Book added successfully!" )
      onSuccess?.()
    } catch {
    toast.error(" Failed to add book")
   
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Add New Book</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <Label>Title</Label>
          <Input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Enter book title"
          />
        </div>

        <div className="space-y-1">
          <Label>Author</Label>
          <Input
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            placeholder="Enter author's name"
          />
        </div>

        <div className="space-y-1">
          <Label>Genre</Label>
          <Select
            value={form.genre}
            onValueChange={(value) => setForm({ ...form, genre: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FICTION">Fiction</SelectItem>
              <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
              <SelectItem value="SCIENCE">Science</SelectItem>
              <SelectItem value="HISTORY">History</SelectItem>
              <SelectItem value="BIOGRAPHY">Biography</SelectItem>
              <SelectItem value="FANTASY">Fantasy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label>ISBN</Label>
          <Input
            value={form.isbn}
            onChange={(e) => setForm({ ...form, isbn: e.target.value })}
            placeholder="Enter ISBN"
          />
        </div>

        <div className="space-y-1">
          <Label>Book Image URL</Label>
          <Input
            value={form.bookImage}
            onChange={(e) => setForm({ ...form, bookImage: e.target.value })}
            placeholder="Paste image URL"
          />
        </div>

        <div className="space-y-1">
          <Label>Description</Label>
          <Textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Short description"
          />
        </div>

        <div className="space-y-1">
          <Label>Copies</Label>
          <Input
            type="number"
            value={form.copies}
            onChange={(e) => setForm({ ...form, copies: Number(e.target.value) })}
            min={1}
          />
        </div>

        <Button className="w-full" onClick={handleSubmit}>
          Submit
        </Button>
      </CardContent>
    </Card>
  )
}

export default AddBookForm
