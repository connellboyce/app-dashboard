'use client';
import React from "react";
import { useState, useEffect } from 'react';
import {CheckCircleIcon, MinusCircleIcon, XCircleIcon} from "@heroicons/react/24/solid";

interface ActuatorInfo {
    app: { name: string; version: string; description: string },
    git: { branch: string; commit: {id: string, time: string}},
}

const AppInfo = ({name, domain}: {name: string, domain: string}) => {
    const [isLoading, setIsLoading]: [boolean, (value: boolean) => void] = useState(true);
    const [info, setInfo]: [ActuatorInfo | undefined, (value: ActuatorInfo | undefined) => void] = useState();

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(domain + '/actuator/info');
            const data = await res.json();
            setInfo(data);
        }
        fetchData().finally(() => setIsLoading(false));
    }, [domain]);

    if (isLoading) {
        return (
            <div className="rounded-lg bg-neutral-800 p-4 max-h-fit">
                <p className="font-bold">{name}</p>
                <p className="text-sm">{domain}</p>
                <div className="flex items-center pt-4">
                    <MinusCircleIcon className="text-neutral-500 h-8"/>
                    <p className="px-4">Loading...</p>
                </div>
            </div>
        );
    } else if (info) {
        return (
            <div className="rounded-lg bg-green-950 p-4 max-h-fit">
                <p className="font-bold">{name}</p>
                <p className="text-sm">{domain}</p>
                <div className="flex items-center pt-4">
                    <CheckCircleIcon className="text-green-600 h-8"/>
                    <div className="px-4">
                        <p>Version: {info.app.version ? info.app.version : "UNKNOWN"}</p>
                        <p>Commit: {info.git.commit.id ? info.git.commit.id : "UNKNOWN"}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="rounded-lg bg-red-950 p-4 max-h-fit">
                <p className="font-bold">{name}</p>
                <p className="text-sm">{domain}</p>
                <div className="flex items-center pt-4">
                    <XCircleIcon className="text-red-600 h-8"/>
                    <p className="px-4">App info is unresponsive!</p>
                </div>
            </div>
        );

    }
}

export default AppInfo;
