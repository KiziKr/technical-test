<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserSheetRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserSheetController extends AbstractController
{
    /**
     * @Route("/api/user/{id}", name="api_user_find_one", methods={"GET"})
     */
    public function findOne(Request $request, SerializerInterface $serializer, UserSheetRepository $userSheetRepository)
    {
        return $this->json(
            $userSheetRepository->findOneByIdJoinedToUserSheet($request->get('id')),
            200,
            [],
            ['groups' => 'user_sheet:find']
        );
    }
}
