"use client"
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Loader2Icon, LogInIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import TextField from "../customTextField";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useAuth } from "@/context/authContext";

// 1. Define your Zod schema
const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
    password: z
        .string()
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/\d/, "Password must contain at least one number")
        .regex(/[!@#$%^&*()_+\-=\[\]{}|;':"\\.,<>?`~]/, "Password must contain at least one special character")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .min(8, "Password must be at least 8 characters long")
        .min(1, "Password is required")
});
// 2. Infer the TypeScript type from the schema
type LoginFormData = z.infer<typeof loginSchema>;

export function LoginModal() {
    const router = useRouter();

    // Use the inferred type for your form data
    const [formData, setFormData] = useState<LoginFormData>({
        email: 'superadmin@system.co',
        password: 'k herira'
    });

    const [formErrors, setFormErrors] = useState<{
        email: { error: boolean; helperText: string };
        password: { error: boolean; helperText: string };
    }>({
        email: { error: false, helperText: '' },
        password: { error: false, helperText: '' },
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear specific field error when user starts typing
        if (formErrors[name as keyof typeof formErrors].error) {
            setFormErrors(prev => ({
                ...prev,
                [name]: { error: false, helperText: '' }
            }));
        }
    }

    // 3. Replace your old validate function with Zod validation
    const validateWithZod = () => {
        try {
            // This will throw an error if validation fails
            loginSchema.parse(formData);

            // If we get here, validation passed
            setFormErrors({
                email: { error: false, helperText: '' },
                password: { error: false, helperText: '' },
            });
            return true;

        } catch (error) {
            if (error instanceof z.ZodError) {
                // Convert Zod errors to your form error format
                const newErrors = {
                    email: { error: false, helperText: '' },
                    password: { error: false, helperText: '' },
                };

                // Loop through Zod errors and map them to form fields
                error.errors.forEach((err) => {
                    const fieldName = err.path[0] as keyof typeof newErrors;
                    if (fieldName && newErrors[fieldName]) {
                        newErrors[fieldName] = {
                            error: true,
                            helperText: err.message
                        };
                    }
                });

                setFormErrors(newErrors);
            }
            return false;
        }
    };

    // 4. Alternative: Use safeParse for more control (recommended approach)
    const validateWithSafeParse = () => {
        const result = loginSchema.safeParse(formData);

        if (result.success) {
            // Validation passed
            setFormErrors({
                email: { error: false, helperText: '' },
                password: { error: false, helperText: '' },
            });
            return true;
        } else {
            // Validation failed
            const newErrors = {
                email: { error: false, helperText: '' },
                password: { error: false, helperText: '' },
            };

            result.error.errors.forEach((err) => {
                const fieldName = err.path[0] as keyof typeof newErrors;
                if (fieldName && newErrors[fieldName]) {
                    newErrors[fieldName] = {
                        error: true,
                        helperText: err.message
                    };
                }
            });

            setFormErrors(newErrors);
            return false;
        }
    };
    // const { mutate } = useLoginUserMutation()
    const { useMutateLogin } = useAuth()
    const { mutate: handleLogin, isPending } = useMutateLogin()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // if (!validateWithZod()) {
        //     console.log('Zod validation failed');
        //     return;
        // }
        setLoading(true);
        try {
            const res = await handleLogin(formData)
            console.log(res)
            // router.push('/dashboard');
        } catch (err: any) {
            console.error('Login error:', err);
            setFormErrors(prev => ({
                ...prev,
                password: {
                    error: true,
                    helperText: err.message || 'Login failed. Please check your credentials.'
                }
            }));
        } finally {
            setLoading(false);
        }
    };

    return (
        <DialogContent showCloseButton={false} className="font-nunito sm:max-w-[425px] p-2 border-1 outline-alt-background outline-0 bg-card min-w-80">
            <DialogHeader>
                <VisuallyHidden asChild>
                    <DialogTitle>Login</DialogTitle>
                </VisuallyHidden>
            </DialogHeader>
            <div className="flex w-full sm:max-w-[425px] flex-col gap-6">
                <Tabs defaultValue="login">
                    <TabsList className="gap-1 sm:gap-2 bg-background">
                        <TabsTrigger className="bg-inactive text-inactive-foreground dark:data-[state=active]:text-white data-[state=active]:text-black transition-colors duration-500" value="login">Login</TabsTrigger>
                        <TabsTrigger className="bg-inactive text-inactive-foreground dark:data-[state=active]:text-white data-[state=active]:text-black transition-colors duration-500" value="pass">Create an Account</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login">
                        <form noValidate onSubmit={handleSubmit}>
                            <Card className="border-0 shadow-none max-sm:p-2 ">
                                <CardHeader className="px-2 sm:px-6">
                                    <CardTitle>Log In</CardTitle>
                                    <CardDescription>
                                        Enter your credentials to access your account.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-6 px-2 sm:px-6">
                                    <div className="grid gap-3">
                                        <TextField
                                            type="email"
                                            label="Email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            helperText="Enter the email you previously registered"
                                            errors={formErrors}
                                            onChange={handleChange}
                                            disabled={loading}
                                        />
                                        <TextField
                                            required
                                            type="password"
                                            label="Password"
                                            name="password"
                                            value={formData.password}
                                            errors={formErrors}
                                            onChange={handleChange}
                                            disabled={loading}
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter className="flex-col items-start">
                                    <Button type="submit" variant="outline" disabled={loading}>
                                        {loading ?
                                            <Loader2Icon className="animate-spin" />
                                            :
                                            <LogInIcon />
                                        }Login
                                    </Button>
                                    <Button type="button" variant="link" disabled={loading} className="font-normal hover:no-underline  no-underline cursor-pointer p-0">
                                        Forgot Password
                                    </Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </TabsContent>
                    <TabsContent value="pass">
                        <form noValidate onSubmit={handleSubmit}>
                            <Card className="border-0 shadow-none">
                                <CardHeader>
                                    <CardTitle>Log In</CardTitle>
                                    <CardDescription>
                                        Enter your credentials to access your account.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-6">
                                    <div className="grid gap-3">
                                        <TextField
                                            type="email"
                                            label="Email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            helperText="Enter the email you previously registered"
                                            errors={formErrors}
                                            onChange={handleChange}
                                            disabled={loading}
                                        />
                                        <TextField
                                            required
                                            type="password"
                                            label="Password"
                                            name="password"
                                            value={formData.password}
                                            errors={formErrors}
                                            onChange={handleChange}
                                            disabled={loading}
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit" variant="ghost" disabled={loading}>
                                        {loading ?
                                            <Loader2Icon className="animate-spin" />
                                            :
                                            <LogInIcon />
                                        }Login
                                    </Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </TabsContent>
                </Tabs>
            </div>
        </DialogContent>
    )
}