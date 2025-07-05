import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "react-toastify"
import { useBorrowBookMutation } from "@/redux/services/borrowApi"
import { useGetBookByIdQuery } from "@/redux/services/booksApi"

const BorrowForm = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data: book, isLoading } = useGetBookByIdQuery(id!)
    const [borrowBook] = useBorrowBookMutation()

    const [form, setForm] = useState({
        quantity: 1,
        dueDate: "",
    })

    const handleSubmit = async () => {
        if (!id || !form.dueDate || form.quantity <= 0) {
            toast.error(" All fields are required");
            return;
        }


        try {
            await borrowBook({
                book: id,
                quantity: form.quantity,
                dueDate: form.dueDate,
            }).unwrap();
            toast.success("✅ Book borrowed successfully")
            navigate("/borrow-summary")
        } catch (err) {
            toast.error("Error borrowing book")
            console.error(err)
        }
    }

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Borrow "{book?.title}"</h2>

            <Input
                type="number"
                placeholder="Quantity"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: Number(e.target.value) })}
                min={1}
                max={book?.copies}
                className="mb-4"
            />

            <Input
                type="date"
                placeholder="Due Date"
                value={form.dueDate}
                onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                className="mb-4"
            />

            <Button className="w-full" onClick={handleSubmit}>
                Borrow
            </Button>
        </div>
    )
}

export default BorrowForm
