"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCreateTeacher, useUpdateTeacher } from "@/hooks/useTeachers";
import TeacherForm from "./teacher-edit";
import { Teacher, TeacherFormValues } from "@/types/SchoolTypes";

interface TeacherFormModalProps {
  open: boolean;
  onClose: () => void;
  teacher?: Teacher | null;
  onSubmit?: (formData: TeacherFormValues) => void;
}

export default function TeacherFormModal({
  open,
  onClose,
  teacher
}: TeacherFormModalProps) {
  const { mutate: createTeacher, isPending: creating } = useCreateTeacher();
  const { mutate: updateTeacher, isPending: updating } = useUpdateTeacher(
    teacher?.id ?? ""
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{teacher ? "Edit Guru" : "Tambah Guru"}</DialogTitle>
        </DialogHeader>
        <DialogDescription hidden/>
        <TeacherForm
          initialData={teacher}
          isPending={creating || updating}
          onSubmit={(formData: FormData) => {
            if (teacher) {
              updateTeacher(formData, { onSuccess: onClose });
            } else {
              createTeacher(formData, { onSuccess: onClose });
            }
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
