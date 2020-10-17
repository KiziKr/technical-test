<?php

namespace App\Repository;

use App\Entity\UserSheet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserSheet|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserSheet|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserSheet[]    findAll()
 * @method UserSheet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserSheetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserSheet::class);
    }

    // /**
    //  * @return UserSheet[] Returns an array of UserSheet objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UserSheet
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
