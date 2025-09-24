"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCreateTeacher, useUpdateTeacher } from "@/hooks/useTeachers";
import TeacherForm from "./teacher-edit";

export default function TeacherFormModal({ open, onClose, teacher }: any) {
  const { mutate: createTeacher, isPending: creating } = useCreateTeacher();
  const { mutate: updateTeacher, isPending: updating } = useUpdateTeacher(
    teacher?.id
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{teacher ? "Edit Guru" : "Tambah Guru"}</DialogTitle>
        </DialogHeader>
        <TeacherForm
          initialData={teacher}
          isPending={creating || updating}
          onSubmit={(formData:any) => {
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
