import { Headphones } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export function SupportCard() {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-start gap-3">
                <div className="rounded-full bg-white p-2 shadow-sm">
                    <Headphones className="size-5 text-slate-700" />
                </div>

                <div className="flex-1">
                    <h2 className="font-semibold text-slate-900">
                        Need help with your order?
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Our support team is here to help.
                    </p>

                    <Dialog>
                        <DialogTrigger>
                            <Button className="mt-4">
                                Contact Support
                            </Button>
                        </DialogTrigger>

                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Contact Support
                                </DialogTitle>
                            </DialogHeader>

                            <div className="space-y-3">
                                <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                >
                                    Delivery issue
                                </Button>

                                <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                >
                                    Missing package
                                </Button>

                                <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                >
                                    Other issue
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}