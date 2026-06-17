import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useRevalidator } from "react-router";

import { Alert, AlertDescription } from "~/components/ui/alert";
import { Button } from "../../ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import addUserSchema from "./addUserSchema";
import { API_BASE_URL } from "~/lib/api";

interface AddUserDialogContentProps {
  closeForm: () => void;
}

export default function AddUserDialogContent({
  closeForm,
}: AddUserDialogContentProps) {
  const form = useForm<z.input<typeof addUserSchema>>({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      dob: null,
      gender: null,
      bloodGroup: null,
      address: "",
      postalCode: "",
      city: "",
      state: "",
      country: "",
    },
  });
  const revalidator = useRevalidator();

  async function onUserFormSubmit(data: z.output<typeof addUserSchema>) {
    try {
      const postResp = await fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (postResp.ok) {
        toast("User created. User list updated.");
        closeForm();
        revalidator.revalidate();
      } else {
        form.setError("root", {
          type: "server",
          message: "Server error. Failed to create user.",
        });
      }
    } catch (err) {
      form.setError("root", {
        type: "server",
        message: "Network failure. Unable to reach the server.",
      });
    }
  }

  return (
    <DialogContent className="sm:max-w-lg p-6">
      <DialogHeader>
        <DialogTitle>Add New User</DialogTitle>
        <DialogDescription>
          Create a new user account with role and permissions
        </DialogDescription>
      </DialogHeader>

      <form
        className="mb-4"
        id="addUserForm"
        onSubmit={form.handleSubmit(onUserFormSubmit)}
      >
        <FieldGroup>
          <div className="flex gap-4">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Full Name *</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    name={field.name}
                    placeholder="e.g., John Smith"
                    required
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email *</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    name={field.name}
                    placeholder="john.smith@email.com"
                    required
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
          <div className="flex gap-4">
            <Controller
              name="phoneNumber"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    name={field.name}
                    placeholder="+919876543210"
                    value={field.value ?? ""}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="dob"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Date of Birth</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    name={field.name}
                    type="date"
                    value={field.value ?? ""}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <div className="flex gap-4">
            <Controller
              name="gender"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Gender</FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      aria-invalid={fieldState.invalid}
                      id={field.name}
                    >
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="MALE">Male</SelectItem>
                        <SelectItem value="FEMALE">Female</SelectItem>
                        <SelectItem value="NON_BINARY">Non-binary</SelectItem>
                        <SelectItem value="PREFER_NOT_TO_SAY">
                          Prefer not to say
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="bloodGroup"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Blood Group</FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      aria-invalid={fieldState.invalid}
                      id={field.name}
                    >
                      <SelectValue placeholder="Select blood group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="A_POSITIVE">A+</SelectItem>
                        <SelectItem value="A_NEGATIVE">A-</SelectItem>
                        <SelectItem value="B_POSITIVE">B+</SelectItem>
                        <SelectItem value="B_NEGATIVE">B-</SelectItem>
                        <SelectItem value="AB_POSITIVE">AB+</SelectItem>
                        <SelectItem value="AB_NEGATIVE">AB-</SelectItem>
                        <SelectItem value="O_POSITIVE">O+</SelectItem>
                        <SelectItem value="O_NEGATIVE">O-</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <Controller
            name="address"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Area Detail</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  name={field.name}
                  placeholder="House/Flat No., Building Name, Street"
                  value={field.value ?? ""}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <div className="flex gap-4">
            <Controller
              name="postalCode"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Pin Code</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    name={field.name}
                    placeholder="400001"
                    value={field.value ?? ""}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="city"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>City</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    name={field.name}
                    placeholder="Mumbai"
                    value={field.value ?? ""}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <div className="flex gap-3">
            <Controller
              name="state"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>State</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    name={field.name}
                    placeholder="Maharashtra"
                    value={field.value ?? ""}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="country"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Country</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    name={field.name}
                    placeholder="India"
                    value={field.value ?? ""}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
        </FieldGroup>
      </form>

      {form.formState.errors.root && (
        <Alert variant="destructive">
          <AlertDescription>
            {form.formState.errors.root.message}
          </AlertDescription>
        </Alert>
      )}

      <DialogFooter className="bg-white border-none pt-0">
        <DialogClose asChild>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </DialogClose>
        <Button
          type="submit"
          form="addUserForm"
          disabled={form.formState.isSubmitting}
        >
          Add User
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
