"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function WithdrawalButton({ balance }: { balance: number }) {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleWithdrawal = async () => {
        setLoading(true)
        try {
            const res = await fetch("/api/payouts", {
                method: "POST"
            })
            const data = await res.json()
            if (res.ok) {
                alert("Demande de retrait envoyée avec succès.")
                router.refresh()
            } else {
                alert(data.message)
            }
        } catch (e) {
            console.error(e)
            alert("Erreur lors de la demande.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Button
            size="sm"
            className="w-full"
            variant="secondary"
            disabled={balance < 50 || loading}
            onClick={handleWithdrawal}
        >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Demander un retrait
        </Button>
    )
}
