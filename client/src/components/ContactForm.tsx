import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";

/* ✅ Local schema (NO shared / backend imports) */
const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const isPending = form.formState.isSubmitting;

  const onSubmit = async (data: ContactFormData) => {
    console.log("Contact form data:", data);

    // simulate sending
    await new Promise((res) => setTimeout(res, 1000));

    form.reset();
    alert("Message sent! 🚀");
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full max-w-lg mx-auto space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-mono text-[#64ffda]">Name</label>
          <input
            {...form.register("name")}
            className="w-full bg-[#112240] border border-[#233554] rounded p-3 text-[#e6f1ff] focus:outline-none focus:border-[#64ffda]"
            placeholder="John Doe"
          />
          {form.formState.errors.name && (
            <p className="text-red-400 text-xs">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-mono text-[#64ffda]">Email</label>
          <input
            {...form.register("email")}
            className="w-full bg-[#112240] border border-[#233554] rounded p-3 text-[#e6f1ff] focus:outline-none focus:border-[#64ffda]"
            placeholder="john@example.com"
          />
          {form.formState.errors.email && (
            <p className="text-red-400 text-xs">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-mono text-[#64ffda]">Message</label>
        <textarea
          {...form.register("message")}
          rows={5}
          className="w-full bg-[#112240] border border-[#233554] rounded p-3 text-[#e6f1ff] focus:outline-none focus:border-[#64ffda] resize-none"
          placeholder="Hello! I'd like to discuss a project..."
        />
        {form.formState.errors.message && (
          <p className="text-red-400 text-xs">
            {form.formState.errors.message.message}
          </p>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isPending}
        className="w-full md:w-auto px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition flex items-center justify-center gap-2 mx-auto"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </motion.button>
    </form>
  );
}
