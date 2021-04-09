import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

interface IPSingleMusicModal {
  isOpen: boolean;
  onClose: () => void;
  onDelete?: () => void;
}

export function SingleMusicModal({
  isOpen,
  onClose,
  onDelete,
}: IPSingleMusicModal) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent fontSize="2rem">
          <ModalHeader fontSize="3rem">Delete this from playlist</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize="2rem">Are you sure to delete this?</ModalBody>

          <ModalFooter fontSize="2rem">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              color="white"
              backgroundColor="red.500"
              _hover={{ backgroundColor: 'red.400' }}
              onClick={onDelete}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
