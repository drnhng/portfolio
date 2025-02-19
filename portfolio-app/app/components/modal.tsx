'use client';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 rounded-lg"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
} 