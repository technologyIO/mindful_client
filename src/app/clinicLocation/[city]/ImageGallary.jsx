"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, IconButton, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
export default function ImageGallary({ images }) {
    // console.log('images', images)
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        const handlePopState = () => {
            if (open) {
                setOpen(false);
            }
        };

        if (open) {
            window.history.pushState(null, '');
            window.addEventListener('popstate', handlePopState);
        }

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [open]);

    return (
        <div className="mx-auto px-4 py-6">
            <div className="grid grid-cols-4 gap-1 min-h-[350px]">
                {images.slice(0, 6).map((image, index) => (
                    <div
                        key={index}
                        className={`bg-muted overflow-hidden ${image.className}`}
                        onClick={handleOpen}
                        style={{ cursor: "pointer" }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={700}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* Show more section with a blurry background */}
          {images.length > 6 &&
            <div className="col-span-2 relative flex items-center justify-center bg-muted  overflow-hidden">
                    {/* Blurry image background */}
                    <Image
                        src={images[6]?.src} // using the 7th image as the background
                        alt={images[6]?.alt || 'More images'}
                        layout="fill"
                        className="object-cover w-full h-full blur-[.5px]" // apply blur here
                    />
                    {/* Overlay with the "show more" text */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                        <div className="text-xl font-semibold" onClick={handleOpen}>
                            {`+${images.length - 6} more`}
                        </div>
                    </div>
                </div>
          }
            </div>


            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                aria-labelledby="gallery-dialog"
            >
                <DialogContent className=" p-4">
                    <div className="flex justify-end">
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"

                        >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className="h-[80vh] overflow-y-scroll scrollbar-none">
                        <Grid container spacing={2}>
                            {images.map((image, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={700}
                                        height={500}
                                        className="w-full h-full object-cover"
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
