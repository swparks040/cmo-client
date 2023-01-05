import {useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllUsers, getPTObyUser } from "../managers/PTOManager";
import { updatePTO } from "../managers/PTOManager";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const UpdatePTO = () => {
    const {}