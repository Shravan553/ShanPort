import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Loader2Icon } from "lucide-react";
import CustomInput from "@/components/utility/custom-input";
import CustomTextarea from "@/components/utility/custom-textarea";
import { type FormiKInputFieldProps } from "@/utility/types";
import { useState } from "react";

// Validation schema for the form
export const mailValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email required"),
  name: Yup.string().required("Name required"),
  subject: Yup.string().required("Subject required"),
  message: Yup.string().required("Message required"),
});

// Form data interface
export type ContactFormValues = Yup.InferType<typeof mailValidationSchema>;

export type FormFields = {
  name: keyof ContactFormValues;
  label: string;
  type: "text";
  fieldType: "text" | "textarea";
  placeholder: string;
};

// Form fields data (labels, names, etc.)
const FormFieldsData: FormFields[] = [
  {
    name: "email",
    label: "Email",
    type: "text",
    fieldType: "text",
    placeholder: "Email",
  },
  {
    name: "name",
    label: "Name",
    type: "text",
    fieldType: "text",
    placeholder: "Name",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    fieldType: "text",
    placeholder: "Subject",
  },
  {
    name: "message",
    label: "Message",
    type: "text",
    fieldType: "textarea",
    placeholder: "Message",
  },
];

// Initial form values
const initialFormValues: ContactFormValues = {
  email: "",
  name: "",
  message: "",
  subject: "",
};

// Component for handling the form submission
export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  // Formspree endpoint for sending form data
  const formspreeEndpoint = "https://formspree.io/f/meoogrpg"; // Replace with your Formspree endpoint

  // Handle form submission
  const handleSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmissionStatus(null); // Reset previous submission status

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmissionStatus("Success! Your message has been sent.");
      } else {
        throw new Error("Failed to send the message.");
      }
    } catch (error) {
      setSubmissionStatus("Failed to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={mailValidationSchema}
      onSubmit={handleSubmit}
      validateOnChange
    >
      <Form className="mt-6 flex flex-col gap-3">
        {FormFieldsData.map((form) => (
          <div key={form.name} className="flex flex-col gap-1">
            <div>
              <label
                htmlFor={form.name}
                className="inline font-medium text-background"
              >
                {form.label}
              </label>
            </div>
            <div className="relative">
              <Field name={form.name}>
                {({ field, meta }: FormiKInputFieldProps<string>) =>
                  form.fieldType === "text" ? (
                    <>
                      <CustomInput
                        id={form.name}
                        {...field}
                        type={form.type}
                        placeholder={form.placeholder}
                        autoComplete="off"
                      />
                      {Boolean(meta.touched && meta.error) && (
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm">
                          {meta.error}
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      <CustomTextarea
                        id={form.name}
                        {...field}
                        placeholder={form.placeholder}
                      />
                      {Boolean(meta.touched && meta.error) && (
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm">
                          {meta.error}
                        </span>
                      )}
                    </>
                  )
                }
              </Field>
            </div>
          </div>
        ))}

        {submissionStatus && (
          <div
            className={`mt-4 p-3 text-center font-semibold ${
              submissionStatus.startsWith("Success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {submissionStatus}
          </div>
        )}

        <button
          aria-label="send email"
          type="submit"
          className="mt-4 w-full rounded-full bg-background px-4 py-3 text-center text-lg font-semibold text-accent transition-colors duration-150 hover:bg-background/90 disabled:cursor-not-allowed disabled:bg-background/80"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="inline-flex items-center space-x-2">
              <Loader2Icon className="animate-spin" size={16} />
              <span>Sending</span>
            </div>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </Form>
    </Formik>
  );
}
