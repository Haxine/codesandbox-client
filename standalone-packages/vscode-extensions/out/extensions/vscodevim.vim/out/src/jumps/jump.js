"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a Jump in the JumpTracker.
 * Includes information necessary to determine jump actions,
 * and to be able to open the related file.
 */
class Jump {
    /**
     *
     * @param options
     * @param options.editor - The editor associated with the jump.
     * @param options.fileName - The absolute or relative file path.
     * @param options.position - The line and column number information.
     */
    constructor({ editor, fileName, position, }) {
        this.editor = editor;
        this.fileName = fileName;
        this.position = position;
    }
    /**
     * Factory method for creating a Jump from a VimState's current cursor position.
     * @param vimState - State that contains the fileName and position for the jump
     */
    static fromStateNow(vimState) {
        return new Jump({
            editor: vimState.editor,
            fileName: vimState.editor.document.fileName,
            position: vimState.cursorPosition,
        });
    }
    /**
     * Factory method for creating a Jump from a VimState's cursor position,
     * before any actions or commands were performed.
     * @param vimState - State that contains the fileName and prior position for the jump
     */
    static fromStateBefore(vimState) {
        return new Jump({
            editor: vimState.editor,
            fileName: vimState.editor.document.fileName,
            position: vimState.cursorPositionJustBeforeAnythingHappened[0],
        });
    }
    /**
     * Determine whether another jump matches the same file path and line number,
     * regardless of whether the column numbers match.
     *
     * @param other - Another Jump to compare against
     */
    onSameLine(other) {
        return (!other || (this.fileName === other.fileName && this.position.line === other.position.line));
    }
}
exports.Jump = Jump;

//# sourceMappingURL=jump.js.map
