/*
Code that is used as reference for all doors.

Ana Paula Katsuda, Mateo Herrera & Gerardo Gutiérrez
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Door : MonoBehaviour
{
    // Enum that stores all types of doors in a room
    public enum DoorType
    {
        left, right, top, bottom
    }
    
    // Class that uses enum
    public DoorType doorType;
    
    // Object that stores the collider assigned to each door
    public GameObject doorCollider;

    // Variable that stores the player object
    private GameObject player;
    //private float widthOffset = 4f;

    private void Start()
    {
        player = GameObject.FindGameObjectWithTag("Player");
    }

    // void OnTriggerEnter2D(Collider2D other)
    // {
    //     if(other.tag == "Player")
    //     {
    //         switch(doorType)
    //         {
    //             case DoorType.bottom:
    //                 player.transform.position = new Vector2(transform.position.x, transform.position.y - widthOffset);
    //                 break;
    //             case DoorType.left:
    //                 player.transform.position = new Vector2(transform.position.x - widthOffset, transform.position.y);
    //                 break;
    //             case DoorType.right:
    //                 player.transform.position = new Vector2(transform.position.x + widthOffset, transform.position.y);
    //                 break;
    //             case DoorType.top:
    //                 player.transform.position = new Vector2(transform.position.x, transform.position.y + widthOffset);
    //                 break;
    //         }
    //     }
    // }
}