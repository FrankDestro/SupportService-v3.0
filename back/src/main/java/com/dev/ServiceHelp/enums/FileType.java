package com.dev.ServiceHelp.enums;

public enum FileType {

    PDF("application/pdf"),
    JPEG("image/jpeg"),
    PNG("image/png"),
    GIF("image/gif"),
    DOC("application/msword"),
    DOCX("application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
    TXT("text/plain");

    private final String mimeType;

    FileType(String mimeType) {
        this.mimeType = mimeType;
    }

    public String getMimeType() {
        return mimeType;
    }

}


